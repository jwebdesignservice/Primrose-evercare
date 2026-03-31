'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  relationship: string;
  careFor: string;
  location: string;
  conditions: string;
  careType: string;
  frequency: string;
  urgency: string;
  startDate: string;
  budget: string;
  hearAboutUs: string;
  message: string;
};

const initialForm: FormData = {
  firstName: '', lastName: '', phone: '', email: '',
  relationship: '', careFor: '', location: '', conditions: '',
  careType: '', frequency: '', urgency: '', startDate: '',
  budget: '', hearAboutUs: '', message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setSubmitError(data.error || 'Something went wrong. Please try again or call us directly.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitError('Unable to send your enquiry. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E8A4A0]/12 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#4A7FA5]/10 blur-3xl" />
        <svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-contact" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#1E293B" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-contact)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div className="text-center mb-10" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
            Get in Touch
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E293B] mb-4">
            Book a Free Care Assessment
          </h1>
          <p className="text-[#1E293B]/60 text-base sm:text-lg max-w-2xl mx-auto">
            Fill in the form below and a member of our team will be in touch within 24 hours. All enquiries are completely confidential.
          </p>
        </motion.div>

        {/* Step indicator */}
        {!submitted && (
          <motion.div className="flex items-center justify-center gap-4 mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} role="status" aria-live="polite" aria-label={`Step ${step} of 2`}>
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    step >= s ? 'bg-gradient-to-r from-[#4A7FA5] to-[#5B8FB9] text-white shadow-md' : 'bg-white border-2 border-gray-200 text-[#1E293B]/40'
                  }`}
                  aria-label={step > s ? `Step ${s} complete` : `Step ${s}${step === s ? ' — current' : ''}`}
                >
                  {step > s ? <CheckCircle className="w-5 h-5" aria-hidden="true" /> : s}
                </div>
                <span className={`text-sm font-medium hidden sm:block ${step >= s ? 'text-[#4A7FA5]' : 'text-[#1E293B]/40'}`}>
                  {s === 1 ? 'About You & the Person' : 'Care Requirements'}
                </span>
                {s < 2 && <div className={`w-12 h-0.5 ${step > s ? 'bg-[#4A7FA5]' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Contact info */}
          <motion.div className="lg:col-span-1 space-y-6" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E8A4A0]/15">
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-[#1E293B] mb-6">Contact Details</h2>
              <div className="space-y-5">
                {[
                  { icon: Phone, bg: 'bg-[#FEF3F2]', color: 'text-[#D4887F]', label: 'Phone', content: <a href="tel:07852559816" className="text-[#1E293B] font-medium hover:text-[#D4887F] transition-colors">07852 559816</a> },
                  { icon: Mail, bg: 'bg-[#EBF4FB]', color: 'text-[#4A7FA5]', label: 'Email', content: <a href="mailto:enquires@primroseevercare.co.uk" className="text-[#1E293B] font-medium hover:text-[#4A7FA5] transition-colors break-all text-sm">enquires@primroseevercare.co.uk</a> },
                  { icon: MapPin, bg: 'bg-[#EEF5EE]', color: 'text-[#7B9E7B]', label: 'Areas Covered', content: <p className="text-[#1E293B] font-medium text-sm leading-relaxed">Dartford, Gravesend, Medway,<br />Maidstone, Sittingbourne &amp; Isle of Sheppey</p> },
                  { icon: Clock, bg: 'bg-[#F3EEF8]', color: 'text-[#9B7EC8]', label: 'Response Time', content: <p className="text-[#1E293B] font-medium text-sm">Within 24 hours</p> },
                ].map(({ icon: Icon, bg, color, label, content }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1E293B]/50 uppercase tracking-wider mb-0.5">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#E8A4A0]/15">
                <p className="text-xs font-semibold text-[#1E293B]/50 uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/primroseevercare?igsh=MWN4dW5sYW1jdjlycA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Primrose Ever Care on Instagram"
                    className="w-10 h-10 rounded-xl bg-[#FEF3F2] hover:bg-[#E8A4A0]/30 flex items-center justify-center transition-colors duration-200"
                  >
                    <InstagramIcon className="w-5 h-5 text-[#D4887F]" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576445211717&sk=about"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Primrose Ever Care on Facebook"
                    className="w-10 h-10 rounded-xl bg-[#FEF3F2] hover:bg-[#E8A4A0]/30 flex items-center justify-center transition-colors duration-200"
                  >
                    <FacebookIcon className="w-5 h-5 text-[#D4887F]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4A7FA5] to-[#5B8FB9] rounded-2xl p-6 text-white shadow-sm">
              <p className="font-heading text-lg font-semibold mb-3">Why Choose Us?</p>
              <ul className="space-y-2 text-sm text-white/85">
                {['Free, no-obligation assessment', 'DBS checked & fully insured staff', 'Person-centred care plans', 'CQC registration in progress', 'Local Medway team you can trust'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#E8A4A0] flex-shrink-0" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Multi-step form */}
          <motion.div className="lg:col-span-2" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6, delay: 0.25 }}>

            {submitted ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 sm:p-12 shadow-sm border border-[#E8A4A0]/15 flex flex-col items-center justify-center text-center min-h-[500px]">
                <div className="w-20 h-20 rounded-full bg-[#EEF5EE] flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-[#7B9E7B]" strokeWidth={1.5} />
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#1E293B] mb-3">Thank You!</h2>
                <p className="text-[#1E293B]/60 text-base sm:text-lg max-w-md">
                  Your enquiry has been received. A member of our team will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-[#E8A4A0]/15 overflow-hidden">

                {/* Step 1 */}
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.form
                      key="step1"
                      onSubmit={handleNext}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 sm:p-8 space-y-7"
                    >
                      <div className="pb-3 border-b border-[#E8A4A0]/20">
                        <h3 className="font-heading text-xl font-semibold text-[#1E293B]">Step 1 of 2 — About You</h3>
                        <p className="text-sm text-[#1E293B]/50 mt-0.5">Tell us who you are and who needs care</p>
                      </div>

                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <Field label="First Name *" required>
                            <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="e.g. Sarah" className={inputClass} />
                          </Field>
                          <Field label="Last Name *" required>
                            <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="e.g. Johnson" className={inputClass} />
                          </Field>
                          <Field label="Phone Number *" required>
                            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="e.g. 07700 900000" className={inputClass} />
                          </Field>
                          <Field label="Email Address *" required>
                            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="e.g. sarah@email.com" className={inputClass} />
                          </Field>
                        </div>

                        <Field label="Your Relationship to the Person Needing Care *" required>
                          <select name="relationship" value={form.relationship} onChange={handleChange} required className={selectClass}>
                            <option value="">Please select...</option>
                            <option>I am the person needing care</option>
                            <option>Son / Daughter</option>
                            <option>Spouse / Partner</option>
                            <option>Sibling</option>
                            <option>Other family member</option>
                            <option>Friend</option>
                            <option>Healthcare professional / Referral</option>
                          </select>
                        </Field>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <Field label="Name of Person Needing Care">
                            <input name="careFor" value={form.careFor} onChange={handleChange} placeholder="First name is fine" className={inputClass} />
                          </Field>
                          <Field label="Area / Location *" required>
                            <select name="location" value={form.location} onChange={handleChange} required className={selectClass}>
                              <option value="">Please select...</option>
                              <option>Dartford</option>
                              <option>Gravesend / Northfleet</option>
                              <option>Rochester</option>
                              <option>Chatham</option>
                              <option>Gillingham</option>
                              <option>Strood</option>
                              <option>Rainham</option>
                              <option>Other Medway area</option>
                              <option>Maidstone</option>
                              <option>Sittingbourne</option>
                              <option>Isle of Sheppey</option>
                              <option>Outside these areas — please advise</option>
                            </select>
                          </Field>
                        </div>

                        <Field label="Any Relevant Medical Conditions or Diagnoses">
                          <select name="conditions" value={form.conditions} onChange={handleChange} className={selectClass}>
                            <option value="">Please select the most relevant...</option>
                            <option>Dementia / Alzheimer&apos;s</option>
                            <option>Parkinson&apos;s Disease</option>
                            <option>Stroke / Acquired Brain Injury</option>
                            <option>Physical Disability</option>
                            <option>Mental Health Condition</option>
                            <option>Cancer / Palliative Care</option>
                            <option>Frailty / Age-related needs</option>
                            <option>Learning Disability</option>
                            <option>No specific diagnosis</option>
                            <option>Prefer not to say</option>
                          </select>
                        </Field>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button type="submit" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#4A7FA5] to-[#5B8FB9] shadow-md hover:shadow-[0_0_28px_rgba(74,127,165,0.45)] transition-all duration-300 hover:-translate-y-0.5">
                          Next: Care Requirements
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.form>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <motion.form
                      key="step2"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.3 }}
                      className="p-6 sm:p-8 space-y-7"
                    >
                      <div className="pb-3 border-b border-[#E8A4A0]/20">
                        <h3 className="font-heading text-xl font-semibold text-[#1E293B]">Step 2 of 2 — Care Requirements</h3>
                        <p className="text-sm text-[#1E293B]/50 mt-0.5">Help us understand what support is needed</p>
                      </div>

                      <div className="space-y-5">
                        <Field label="Type of Care Required *" required>
                          <select name="careType" value={form.careType} onChange={handleChange} required className={selectClass}>
                            <option value="">Please select...</option>
                            <option>Personal Care (bathing, dressing, grooming)</option>
                            <option>Dementia Care</option>
                            <option>Companionship Visits</option>
                            <option>Medication Support</option>

                            <option>Multiple services — please discuss</option>
                            <option>Not sure — need guidance</option>
                          </select>
                        </Field>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <Field label="How Often is Care Needed?">
                            <select name="frequency" value={form.frequency} onChange={handleChange} className={selectClass}>
                              <option value="">Please select...</option>
                              <option>Once a day</option>
                              <option>Twice a day</option>
                              <option>Three or more times a day</option>
                              <option>A few times a week</option>

                              <option>Flexible — not yet sure</option>
                            </select>
                          </Field>
                          <Field label="How Urgent Is This?">
                            <select name="urgency" value={form.urgency} onChange={handleChange} className={selectClass}>
                              <option value="">Please select...</option>
                              <option>Urgent — needs care immediately</option>
                              <option>Soon — within days</option>
                              <option>Planning ahead</option>
                              <option>Just making enquiries</option>
                            </select>
                          </Field>
                          <Field label="When Would You Like Care to Start?">
                            <select name="startDate" value={form.startDate} onChange={handleChange} className={selectClass}>
                              <option value="">Please select...</option>
                              <option>As soon as possible (urgent)</option>
                              <option>Within the next 2 weeks</option>
                              <option>Within the next month</option>
                              <option>1–3 months time</option>
                              <option>Just researching for now</option>
                            </select>
                          </Field>
                          <Field label="Approximate Weekly Budget">
                            <select name="budget" value={form.budget} onChange={handleChange} className={selectClass}>
                              <option value="">Prefer not to say / unsure</option>
                              <option>Under £200 per week</option>
                              <option>£200–£400 per week</option>
                              <option>£400–£700 per week</option>
                              <option>£700+ per week</option>
                              <option>Local authority / NHS funded</option>
                              <option>Not yet sure</option>
                            </select>
                          </Field>
                        </div>

                        <Field label="How Did You Hear About Us?">
                          <select name="hearAboutUs" value={form.hearAboutUs} onChange={handleChange} className={selectClass}>
                            <option value="">Please select...</option>
                            <option>Google search</option>
                            <option>Facebook / Social media</option>
                            <option>Recommended by a friend or family member</option>
                            <option>GP / Healthcare professional</option>
                            <option>Local council / Social services</option>
                            <option>Leaflet / Flyer</option>
                            <option>Other</option>
                          </select>
                        </Field>

                        <Field label="Additional Information or Questions">
                          <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us anything else that would help us understand how we can support you..." className={`${inputClass} resize-none`} />
                        </Field>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                        <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-2 text-sm font-medium text-[#4A7FA5] hover:text-[#1E293B] transition-colors">
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                        <div className="flex flex-col gap-2 w-full sm:w-auto">
                          <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#4A7FA5] to-[#5B8FB9] shadow-md hover:shadow-[0_0_28px_rgba(74,127,165,0.45)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
                            {loading ? (
                              <><svg aria-hidden="true" className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>Sending...</>
                            ) : (
                              <><Send className="w-4 h-4" strokeWidth={2} />Send Enquiry</>
                            )}
                          </button>
                          <p className="text-xs text-[#1E293B]/40">By submitting you agree to be contacted regarding your enquiry. We never share your details.</p>
                          {submitError && (
                            <p className="text-xs text-red-500 mt-1">{submitError}</p>
                          )}
                        </div>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div className="mt-14" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <div className="text-center mb-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#1E293B] mb-2">Our Service Area</h2>
            <p className="text-[#1E293B]/55 text-base">We cover Dartford, Gravesend, Medway, Maidstone, Sittingbourne and Isle of Sheppey</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-[#E8A4A0]/15 w-full h-[320px] sm:h-[420px]">
            <iframe
              title="Primrose Ever Care Service Area — North Kent"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126720!2d0.5600!3d51.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d8c5e0b0a5a5%3A0x1a2b3c4d5e6f7g8h!2sNorth%20Kent%2C%20UK!5e0!3m2!1sen!2suk!4v1710000000001!5m2!1sen!2suk"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#1E293B]/70 flex flex-col gap-1.5">
        <span>{label}{required && <span className="text-[#D4887F] ml-0.5">*</span>}</span>
        {children}
      </label>
    </div>
  );
}

const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1E293B] text-sm placeholder:text-[#1E293B]/35 focus:outline-none focus:ring-2 focus:ring-[#E8A4A0]/50 focus:border-[#E8A4A0] transition-all duration-200 h-[50px]';
const selectClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1E293B] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A4A0]/50 focus:border-[#E8A4A0] transition-all duration-200 cursor-pointer h-[50px] appearance-none';
