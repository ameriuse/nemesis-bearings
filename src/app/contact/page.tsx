import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Nemesis Bearings for technical support, quotes, and product inquiries. Phone, email, and online form available.',
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Contact Us' },
      ]} />

      <h1 className="text-3xl font-extrabold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <div className="space-y-6">
            <div>
              <h2 className="font-bold mb-2">Phone</h2>
              <a href="tel:+19154010626" className="text-2xl text-blue-600 font-bold hover:underline">(915) 401-0626</a>
              <p className="text-sm text-muted mt-1">Mon–Fri 8:00 AM – 5:00 PM EST</p>
            </div>
            <div>
              <h2 className="font-bold mb-2">Email</h2>
              <a href="mailto:sales@nemesisbearings.com" className="text-blue-600 hover:underline">sales@nemesisbearings.com</a>
              <p className="text-sm text-muted mt-1">We respond within 4 business hours</p>
            </div>
            <div>
              <h2 className="font-bold mb-2">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                <li><Link href="/quote" className="text-blue-600 hover:underline">Request a Quote</Link></li>
                <li><Link href="/support" className="text-blue-600 hover:underline">Technical Support</Link></li>
                <li><Link href="/resources/interchange" className="text-blue-600 hover:underline">Cross-Reference Lookup</Link></li>
                <li><Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-surface border border-border rounded-xl p-6 space-y-4">
          <h2 className="font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Send Us a Message</h2>
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium mb-1">Name <span className="text-red-600">*</span></label>
            <input id="contact-name" type="text" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium mb-1">Email <span className="text-red-600">*</span></label>
            <input id="contact-email" type="email" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium mb-1">Subject</label>
            <select id="contact-subject" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
              <option>General Inquiry</option>
              <option>Quote Request</option>
              <option>Technical Support</option>
              <option>Order Status</option>
              <option>Returns / Warranty</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium mb-1">Message <span className="text-red-600">*</span></label>
            <textarea id="contact-message" rows={5} required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
            Send Message
          </button>
          <p className="text-xs text-muted text-center">
            By submitting, you agree to our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </p>
        </form>
      </div>
    </div>
  );
}
