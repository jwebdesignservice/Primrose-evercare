'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

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
  careType: string;
  urgency: string;
  location: string;
  frequency: string;
  startDate: string;
  budget: string;
  conditions: string;
  hearAboutUs: string;
  message: string;
};

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  relationship: '',
  careFor: '',
  careType: '',
  urgency: '',
  location: '',
  frequency: '',
  startDate: '',
  budget: '',
  conditions: '',
  hearAboutUs: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF6F5] via-[#F0F7FF] to-[#FAF5FF]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E8A4A0]/12 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#4A7FA5]/10 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-contact" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#1E293B" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-contact)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#E8A4A0]/20 text-[#D4887F] mb-4">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-[#1E293B] mb-4">
            Book a Free Care Assessment
          </h1>
          <p className="text-[#1E293B]/60 text-lg max-w-2xl mx-auto">
            Fill in the form below and a member of our team will be in touch within 24 hours. All enquiries are completely confidential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: Contact info */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-[#E8A4A0]/15">
              <h2 className="font-heading text-2xl font-semibold text-[#1E293B] mb-6">Contact Details</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF3F2] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#D4887F]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1E293B]/50 uppercase tracking-wider mb-0.5">Phone</p>
                    <a href="tel:07852559816" className="text-[#1E293B] font-medium hover:text-[#D4887F] transition-colors">
                      07852 559816
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF4FB] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#4A7FA5]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1E293B]/50 uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:enquires@primroseevercare.co.uk" className="text-[#1E293B] font-medium hover:text-[#4A7FA5] transition-colors break-all text-sm">
                      enquires@primroseevercare.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF5EE] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#7B9E7B]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1E293B]/50 uppercase tracking-wider mb-0.5">Areas Covered</p>
                    <p className="text-[#1E293B] font-medium text-sm leading-relaxed">
                      Rochester, Chatham, Gillingham,<br />Strood, Rainham
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F3EEF8] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#9B7EC8]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1E293B]/50 uppercase tracking-wider mb-0.5">Response Time</p>
                    <p className="text-[#1E293B] font-medium text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
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

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {submitted ? (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-sm border border-[#E8A4A0]/15 flex flex-col items-center justify-center text-center min-h-[500px]">
                <div className="w-20 h-20 rounded-full bg-[#EEF5EE] flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-[#7B9E7B]" strokeWidth={1.5} />
                </div>
                <h2 className="font-heading text-3xl font-semibold text-[#1E293B] mb-3">Thank You!</h2>
                <p className="text-[#1E293B]/60 text-lg max-w-md">
                  Your enquiry has been received. A member of our team will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-[#E8A4A0]/15 space-y-8"
              >
                {/* Section: Your Details */}
                <FormSection title="Your Details" subtitle="Tell us about yourself">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="First Name *" required>
                      <input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Sarah"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Last Name *" required>
                      <input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Johnson"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone Number *" required>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 07700 900000"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email Address *" required>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. sarah@email.com"
                        className={inputClass}
                      />
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
                </FormSection>

                {/* Section: About the Person Needing Care */}
                <FormSection title="About the Person Needing Care" subtitle="Help us understand their situation">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Name of Person Needing Care">
                      <input
                        name="careFor"
                        value={form.careFor}
                        onChange={handleChange}
                        placeholder="First name is fine"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Area / Location *" required>
                      <select name="location" value={form.location} onChange={handleChange} required className={selectClass}>
                        <option value="">Please select...</option>
                        <option>Rochester</option>
                        <option>Chatham</option>
                        <option>Gillingham</option>
                        <option>Strood</option>
                        <option>Rainham</option>
                        <option>Other Medway area</option>
                        <option>Outside Medway — please advise</option>
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
                </FormSection>

                {/* Section: Care Requirements */}
                <FormSection title="Care Requirements" subtitle="What kind of support are you looking for?">
                  <Field label="Type of Care Required *" required>
                    <select name="careType" value={form.careType} onChange={handleChange} required className={selectClass}>
                      <option value="">Please select...</option>
                      <option>Personal Care (bathing, dressing, grooming)</option>
                      <option>Dementia Care</option>
                      <option>Companionship Visits</option>
                      <option>Medication Support</option>
                      <option>Live-in Care</option>
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
                        <option>Live-in / 24-hour care</option>
                        <option>Flexible — not yet sure</option>
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
                    <Field label="How Urgent Is This?">
                      <select name="urgency" value={form.urgency} onChange={handleChange} className={selectClass}>
                        <option value="">Please select...</option>
                        <option>Urgent — needs care immediately</option>
                        <option>Soon — within days</option>
                        <option>Planning ahead</option>
                        <option>Just making enquiries</option>
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
                </FormSection>

                {/* Section: Additional Info */}
                <FormSection title="Anything Else?" subtitle="Any extra detail helps us prepare">
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
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us anything else that would help us understand how we can support you..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>
                </FormSection>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#4A7FA5] to-[#5B8FB9] shadow-md hover:shadow-[0_0_28px_rgba(74,127,165,0.45)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" strokeWidth={2} />
                        Send Enquiry
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-xs text-[#1E293B]/45">
                    By submitting this form you agree to be contacted by Primrose Ever Care regarding your enquiry. We will never share your details with third parties.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helper components
function FormSection({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-5 pb-3 border-b border-[#E8A4A0]/20">
        <h3 className="font-heading text-xl font-semibold text-[#1E293B]">{title}</h3>
        <p className="text-sm text-[#1E293B]/50 mt-0.5">{subtitle}</p>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#1E293B]/70">
        {label}
        {required && <span className="text-[#D4887F] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1E293B] text-sm placeholder:text-[#1E293B]/35 focus:outline-none focus:ring-2 focus:ring-[#E8A4A0]/50 focus:border-[#E8A4A0] transition-all duration-200';

const selectClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1E293B] text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A4A0]/50 focus:border-[#E8A4A0] transition-all duration-200 cursor-pointer';
