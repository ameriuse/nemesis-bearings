import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Nemesis Bearings products, ordering, shipping, returns, and technical support.',
};

const faqs = [
  {
    category: 'Ordering & Quotes',
    questions: [
      {
        q: 'How do I request a quote?',
        a: 'You can submit a quote request through our online RFQ form, email us at sales@nemesisbearings.com, or call (915) 401-0626. Include part numbers, quantities, and your application details for the fastest response.',
      },
      {
        q: 'What is your minimum order quantity?',
        a: 'Most items have no minimum order requirement. Some specialty or made-to-order items may have MOQ requirements, which are noted on the product page.',
      },
      {
        q: 'How quickly will I receive a quote?',
        a: 'We aim to respond to quote requests within 4 business hours during our operating hours (Mon–Fri 8AM–5PM EST).',
      },
      {
        q: 'Do you offer volume pricing?',
        a: 'Yes. Contact us with your quantity requirements for volume pricing. We also offer account-based pricing for recurring customers.',
      },
    ],
  },
  {
    category: 'Products & Cross-Reference',
    questions: [
      {
        q: 'Are your bearings direct replacements for SKF, NSK, FAG, or Timken?',
        a: 'We provide interchange and cross-reference support for widely used bearing series. Our products are designed to meet the same dimensional and performance standards. However, it is the buyer\'s responsibility to verify suitability for their specific application. We are happy to assist with selection.',
      },
      {
        q: 'What brands do you carry?',
        a: 'We supply Nemesis-branded bearings as well as products from other established manufacturers. Contact us for specific brand availability.',
      },
      {
        q: 'I don\'t know the exact part number. Can you help?',
        a: 'Yes. Provide us with dimensions (bore, OD, width), application details, or the equipment model and we can help identify the right bearing. Use our RFQ form or contact technical support.',
      },
    ],
  },
  {
    category: 'Shipping',
    questions: [
      {
        q: 'How fast can I receive my order?',
        a: 'In-stock orders placed before 2PM EST ship the same business day. Standard ground delivery is 3-7 business days. Expedited 2-day and next-day options are available.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Yes. Contact us for international shipping quotes and customs documentation.',
      },
    ],
  },
  {
    category: 'Quality & Technical',
    questions: [
      {
        q: 'Are your products ISO certified?',
        a: 'We maintain quality-focused internal inspection and traceability processes. We are transparent that we do not currently hold ISO 9001 certification. Our sourcing, inspection, and documentation practices are designed to ensure product quality. See our Quality page for details.',
      },
      {
        q: 'Can you provide certificates of conformance?',
        a: 'Yes. Certificates of conformance are available upon request. Please note this at the time of ordering.',
      },
      {
        q: 'Do you offer technical support?',
        a: 'Yes. Our team can assist with bearing selection, fit and tolerance recommendations, lubrication guidance, failure analysis, and application engineering. Contact our technical support team.',
      },
    ],
  },
];

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap(cat => cat.questions.map(q => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    }))),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]} />

        <h1 className="text-3xl font-extrabold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          Frequently Asked Questions
        </h1>

        <div className="space-y-10">
          {faqs.map((cat) => (
            <section key={cat.category}>
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{cat.category}</h2>
              <div className="space-y-4">
                {cat.questions.map((faq) => (
                  <details key={faq.q} className="bg-surface border border-border rounded-xl group">
                    <summary className="px-6 py-4 cursor-pointer font-medium text-sm flex items-center justify-between list-none">
                      {faq.q}
                      <svg className="w-4 h-4 text-muted flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="px-6 pb-4 text-sm text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-steel-100 rounded-xl p-6 text-center">
          <h2 className="font-bold mb-2">Still have questions?</h2>
          <p className="text-sm text-muted mb-4">Our team is ready to help.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-colors">
              Contact Us
            </Link>
            <a href="tel:+19154010626" className="border border-border px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-white transition-colors">
              Call (915) 401-0626
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
