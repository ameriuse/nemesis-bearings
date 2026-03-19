'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [items, setItems] = useState([{ partNumber: '', quantity: '1', description: '' }]);
  const [submitted, setSubmitted] = useState(false);

  const addItem = () => {
    setItems([...items, { partNumber: '', quantity: '1', description: '' }]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const updateItem = (index: number, field: string, value: string) => {
    setItems(items.map((item, i) => i === index ? { ...item, [field]: value } : item));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API endpoint / CRM
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg className="w-16 h-16 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Quote Request Submitted</h2>
        <p className="text-muted mb-4">We will review your request and respond within 4 business hours.</p>
        <p className="text-sm text-muted">For urgent needs, call us at <a href="tel:+19154010626" className="text-blue-600 font-semibold">(915) 401-0626</a></p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <fieldset className="bg-surface border border-border rounded-xl p-6">
        <legend className="font-bold text-lg px-2" style={{ fontFamily: 'var(--font-heading)' }}>Contact Information</legend>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="rfq-name" className="block text-sm font-medium mb-1">Full Name <span className="text-red-600">*</span></label>
            <input id="rfq-name" type="text" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="rfq-company" className="block text-sm font-medium mb-1">Company <span className="text-red-600">*</span></label>
            <input id="rfq-company" type="text" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="rfq-email" className="block text-sm font-medium mb-1">Email <span className="text-red-600">*</span></label>
            <input id="rfq-email" type="email" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="rfq-phone" className="block text-sm font-medium mb-1">Phone</label>
            <input id="rfq-phone" type="tel" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="rfq-role" className="block text-sm font-medium mb-1">Your Role</label>
            <select id="rfq-role" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
              <option value="">Select...</option>
              <option>Buyer / Procurement</option>
              <option>Mechanical Engineer</option>
              <option>Maintenance Technician</option>
              <option>Plant / Operations Manager</option>
              <option>Owner / General Manager</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </fieldset>

      {/* Items */}
      <fieldset className="bg-surface border border-border rounded-xl p-6">
        <legend className="font-bold text-lg px-2" style={{ fontFamily: 'var(--font-heading)' }}>Items Requested</legend>
        <div className="space-y-4 mt-4">
          {items.map((item, index) => (
            <div key={index} className="grid sm:grid-cols-[1fr_100px_1fr_auto] gap-3 items-end bg-steel-100 rounded-lg p-4">
              <div>
                <label htmlFor={`part-${index}`} className="block text-xs font-medium mb-1">Part Number</label>
                <input
                  id={`part-${index}`}
                  type="text"
                  value={item.partNumber}
                  onChange={(e) => updateItem(index, 'partNumber', e.target.value)}
                  placeholder="e.g., 6205-2RS"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor={`qty-${index}`} className="block text-xs font-medium mb-1">Qty</label>
                <input
                  id={`qty-${index}`}
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor={`desc-${index}`} className="block text-xs font-medium mb-1">Description / Notes</label>
                <input
                  id={`desc-${index}`}
                  type="text"
                  value={item.description}
                  onChange={(e) => updateItem(index, 'description', e.target.value)}
                  placeholder="Optional details"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-red-600 hover:text-red-700 p-2"
                aria-label="Remove item"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Add Another Item
          </button>
        </div>
      </fieldset>

      {/* Application Details */}
      <fieldset className="bg-surface border border-border rounded-xl p-6">
        <legend className="font-bold text-lg px-2" style={{ fontFamily: 'var(--font-heading)' }}>Application Details</legend>
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="rfq-urgency" className="block text-sm font-medium mb-1">Urgency</label>
            <select id="rfq-urgency" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
              <option value="standard">Standard</option>
              <option value="urgent">Urgent (need within 1-3 days)</option>
              <option value="critical">Critical (machine down)</option>
            </select>
          </div>
          <div>
            <label htmlFor="rfq-brand" className="block text-sm font-medium mb-1">Preferred Brand (if any)</label>
            <input id="rfq-brand" type="text" placeholder="e.g., any, specific brand" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="rfq-application" className="block text-sm font-medium mb-1">Application / Equipment</label>
            <input id="rfq-application" type="text" placeholder="e.g., electric motor, conveyor belt, pump" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="rfq-conditions" className="block text-sm font-medium mb-1">Operating Conditions (optional)</label>
            <textarea id="rfq-conditions" rows={3} placeholder="Load, speed, temperature, environment, etc." className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="rfq-notes" className="block text-sm font-medium mb-1">Additional Notes</label>
            <textarea id="rfq-notes" rows={3} placeholder="Any other requirements or questions" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
        </div>
      </fieldset>

      <div className="flex items-center justify-between">
        <p className="text-xs text-muted">
          By submitting, you agree to our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
        >
          Submit Quote Request
        </button>
      </div>
    </form>
  );
}
