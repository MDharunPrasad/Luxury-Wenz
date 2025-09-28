import React, { useEffect, useState } from 'react';
import { Building, Plus, Trash2, Save, LogOut, Image } from 'lucide-react';
import { Property } from '../data/properties';

const STORAGE_KEY = 'wenz_properties';

export const AdminPanel: React.FC = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const [form, setForm] = useState<Property>({
    id: Date.now(),
    title: '',
    location: '',
    price: '',
    type: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    area: '',
    images: [''],
    tags: []
  });

  useEffect(() => {
    setIsAuthed(localStorage.getItem('wenz_admin') === '1');
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setProperties(JSON.parse(saved));
  }, []);

  const saveAll = (list: Property[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    setProperties(list);
  };

  const addProperty = () => {
    if (!form.title || !form.price || !form.location || (form.images[0] || '').trim() === '') return;
    const list = [...properties, { ...form, id: Date.now() }];
    saveAll(list);
    setForm({ ...form, title: '', location: '', price: '', area: '', images: [''], tags: [] });
  };

  const removeProperty = (id: number) => {
    saveAll(properties.filter(p => p.id !== id));
  };

  if (!isAuthed) {
    window.location.href = '/admin';
    return null;
  }

  return (
    <div className="min-h-screen bg-ivory pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald to-champagne flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-playfair font-bold text-jet">Admin – Wenzhomes</h1>
          </div>
          <button
            onClick={() => { localStorage.removeItem('wenz_admin'); window.location.href = '/admin'; }}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald text-white hover:opacity-90"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        {/* Create */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 p-6 mb-8 shadow">
          <h2 className="text-xl font-semibold text-jet mb-4">Add Property</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="px-4 py-3 rounded-xl border border-gray-200" placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} />
            <input className="px-4 py-3 rounded-xl border border-gray-200" placeholder="Location" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} />
            <input className="px-4 py-3 rounded-xl border border-gray-200" placeholder="Price" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} />
            <input className="px-4 py-3 rounded-xl border border-gray-200" placeholder="Area (e.g., 2,500 sq ft)" value={form.area} onChange={e=>setForm({...form,area:e.target.value})} />
            <div className="grid grid-cols-3 gap-2">
              <input type="number" min={0} className="px-4 py-3 rounded-xl border border-gray-200" placeholder="Beds" value={form.bedrooms} onChange={e=>setForm({...form,bedrooms:Number(e.target.value)})} />
              <input type="number" min={0} className="px-4 py-3 rounded-xl border border-gray-200" placeholder="Baths" value={form.bathrooms} onChange={e=>setForm({...form,bathrooms:Number(e.target.value)})} />
              <select className="px-4 py-3 rounded-xl border border-gray-200" value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
                <option>Apartment</option><option>Villa</option><option>Townhouse</option><option>Condo</option><option>Loft</option><option>House</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-2 text-gray-600"><Image className="w-4 h-4" /><span>Image URLs (comma separated)</span></div>
              <input className="w-full px-4 py-3 rounded-xl border border-gray-200" placeholder="https://... , https://..." value={form.images.join(', ')} onChange={e=>setForm({...form,images:e.target.value.split(',').map(s=>s.trim()).filter(Boolean)})} />
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <button onClick={addProperty} className="bg-gradient-to-r from-emerald to-champagne text-white px-5 py-3 rounded-xl flex items-center space-x-2 hover:shadow"><Plus className="w-4 h-4" /><span>Add Property</span></button>
          </div>
        </div>

        {/* List */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow">
          <h2 className="text-xl font-semibold text-jet mb-4">Your Properties</h2>
          {properties.length === 0 ? (
            <p className="text-gray-600">No properties added yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((p)=> (
                <div key={p.id} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                  {p.images?.[0] && <img src={p.images[0]} alt={p.title} className="w-full h-40 object-cover" />}
                  <div className="p-4">
                    <div className="font-semibold text-jet mb-1">{p.title}</div>
                    <div className="text-sm text-gray-600 mb-2">{p.location}</div>
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-jet">{p.price}</div>
                      <button onClick={()=>removeProperty(p.id)} className="text-red-600 hover:text-red-700 flex items-center space-x-1"><Trash2 className="w-4 h-4" /><span>Remove</span></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


