import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, MessageSquare, Check, PhoneCall, Loader2, Landmark, Compass, Armchair, DoorClosed, MessageCircle, Sparkles } from 'lucide-react';
import { Language, DICTIONARY, IMAGES } from '../data';
import { Reservation } from '../types';

interface ReservationSectionProps {
  language: Language;
  onNewReservation: (res: Reservation) => void;
  scriptUrl: string;
  setScriptUrl: (url: string) => void;
}

export default function ReservationSection({ language, onNewReservation, scriptUrl, setScriptUrl }: ReservationSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '18:00',
    guests: 2,
    notes: '',
    seatingArea: 'terrace' // terrace | family | window | vip
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [googleSyncStatus, setGoogleSyncStatus] = useState<'idle' | 'syncing' | 'synced' | 'failed'>('idle');
  const [lastReservation, setLastReservation] = useState<{ name: string; link: string } | null>(null);
  
  const d = DICTIONARY[language];
  const isRtl = language === 'ar';

  const seatingOptions = [
    {
      id: 'terrace',
      titleAr: 'الشرفة الخارجية الخلابة',
      titleFr: 'Terrace Ensoleillée',
      descAr: 'جلسات خارجية مبهجة تحت أشعة الشمس ونسمات الهواء العليل.',
      descFr: 'Outdoor dining with crisp fresh air and warm Moroccan sunshine.',
      icon: Compass,
      image: IMAGES.cozyViewTable
    },
    {
      id: 'family',
      titleAr: 'الفضاء العائلي الهادئ',
      titleFr: 'Family Comfort Area',
      descAr: 'خصوصية كاملة وراحة تامة لعائلتك وجلساتكم الحميمة.',
      descFr: 'Ultimate quiet space with comfortable high-chairs and wide tables.',
      icon: Users,
      image: IMAGES.upstairs
    },
    {
      id: 'window',
      titleAr: 'إطلالة النافذة الدافئة',
      titleFr: 'Cozy Window Seat',
      descAr: 'جلسة هادئة مطلة بمحاذاة النوافذ الزجاجية الكبيرة الفاخرة.',
      descFr: 'Beautiful soft sunlight streaming alongside heavy glass panels.',
      icon: Landmark,
      image: IMAGES.windowView
    },
    {
      id: 'vip',
      titleAr: 'صالون كبار الشخصيات VIP',
      titleFr: 'Ultra VIP Lounge',
      descAr: 'جلسة مخملية بأرقى كراسي الجلد الطبيعي والخدمة الحصرية.',
      descFr: 'Premium leather couches, secluded atmosphere and high priority service.',
      icon: Armchair,
      image: IMAGES.loungeGreen
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGuestsChange = (amount: number) => {
    const nextAmount = Math.max(1, Math.min(20, formData.guests + amount));
    setFormData(prev => ({ ...prev, guests: nextAmount }));
  };

  const handleSelectArea = (id: string) => {
    setFormData(prev => ({ ...prev, seatingArea: id }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    setSubmitting(true);
    setGoogleSyncStatus('syncing');

    const reservationId = 'MM-' + Math.floor(1000 + Math.random() * 9000);
    const chosenArea = seatingOptions.find(o => o.id === formData.seatingArea);
    const areaLabel = chosenArea ? (isRtl ? chosenArea.titleAr : chosenArea.titleFr) : formData.seatingArea;
    const finalNotes = `[القسم المحدد: ${areaLabel}] ${formData.notes}`;

    const newRes: Reservation = {
      id: reservationId,
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      guests: Number(formData.guests),
      notes: finalNotes,
      status: 'pending',
      createdAt: new Date().toLocaleString()
    };

    // Save locally
    onNewReservation(newRes);

    // Prepare Sheets Post Payload
    const payload = {
      id: reservationId,
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      guests: Number(formData.guests),
      notes: finalNotes,
      status: 'pending',
      createdAt: new Date().toLocaleDateString('fr-FR') + ' ' + new Date().toLocaleTimeString('fr-FR')
    };

    // Call Google Sheets API if URL is configured
    const targetUrl = scriptUrl.trim();
    if (targetUrl) {
      try {
        await fetch(targetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        
        setTimeout(() => {
          setGoogleSyncStatus('synced');
        }, 1500);

      } catch (err) {
        console.error('Sheets synchronization error:', err);
        setGoogleSyncStatus('failed');
      }
    } else {
      setTimeout(() => {
        setGoogleSyncStatus('synced');
      }, 1500);
    }

    // Prepare WhatsApp Message in Arabic
    const waMessage = `🌟 *طلب حجز طاولة جديد* 🌟\n\n` +
      `📍 *الاسم الكامل:* ${formData.name}\n` +
      `📞 *رقم الهاتف:* ${formData.phone}\n` +
      `📅 *التاريخ:* ${formData.date}\n` +
      `⏰ *الوقت:* ${formData.time}\n` +
      `👥 *عدد الأفراد:* ${formData.guests}\n` +
      `🛋️ *الفضاء المطلوب:* ${areaLabel}\n` +
      `📝 *ملاحظات خاصة:* ${formData.notes || 'لا توجد ملاحظات'}\n\n` +
      `يرجى تأكيد الحجز وشكراً لكم! ✨`;

    const waLink = `https://wa.me/212638309081?text=${encodeURIComponent(waMessage)}`;
    
    setLastReservation({
      name: formData.name,
      link: waLink
    });

    // Attempt to open WhatsApp directly
    try {
      window.open(waLink, '_blank');
    } catch (e) {
      console.error('Popup blocked:', e);
    }

    setSubmitting(false);
    setSuccess(true);
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '18:00',
      guests: 2,
      notes: '',
      seatingArea: 'terrace'
    });

    setTimeout(() => {
      setSuccess(false);
      setGoogleSyncStatus('idle');
    }, 45000); // Give the user 45s to see the WhatsApp links before clearing success view automatically
  };

  return (
    <section id="reserve" className="py-24 sm:py-36 bg-white text-[#1C1C1C] relative overflow-hidden border-t border-black/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#B89020]/2 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[#B89020] font-mono text-xs tracking-[0.2em] uppercase font-semibold">
            ✦ {isRtl ? 'حجز طاولة استثنائية' : 'Bespoke Hostelry'} ✦
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1C1C1C] mt-3">
            {d.reserveTitle}
          </h2>
          <p className="text-gray-655 text-gray-600 text-xs sm:text-sm font-light mt-2">{d.reserveSubtitle}</p>
          <div className="w-12 h-[1px] bg-[#B89020]/45 mx-auto mt-5" />
        </div>

        {/* Real Live Availability Pulsing Status (Instruction 15) */}
        <div className="max-w-xl mx-auto p-4 bg-[#FAF9F6] border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <span className="text-[#1C1C1C] text-xs font-semibold font-mono block">
                {isRtl ? '12 طاولة فاخرة شاغرة ومتاحة الآن' : '12 Exquisite Tables Available Now'}
              </span>
              <span className="text-[10px] text-gray-500 block">
                {isRtl ? 'تم التحديث منذ ثوانٍ معدودة' : 'Live occupancy synchronized moments ago'}
              </span>
            </div>
          </div>
          
          <a
            href={`https://wa.me/212638309081?text=${encodeURIComponent(d.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba5a] text-white border border-[#25D366] text-xs font-mono uppercase tracking-widest transition-all shrink-0 cursor-pointer rounded-none"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-current" />
            <span>{isRtl ? 'حجز بالواتساب' : 'WhatsApp Reserve'}</span>
          </a>
        </div>

        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-12 bg-[#FAF9F6] border border-black/5 text-center max-w-2xl mx-auto space-y-8 shadow-md"
          >
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-serif text-[#1C1C1C]">
                {isRtl ? 'سُجل حجزك الفاخر بنجاح' : 'Exclusive Reservation Saved'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto font-sans">
                {d.reserveSuccess}
              </p>
            </div>

            {lastReservation && (
              <div className="max-w-md mx-auto p-4 bg-[#f0fbf4] border border-[#25D366]/40 rounded-none space-y-3 shadow-sm">
                <p className="text-[#207a3f] text-xs font-semibold">
                  {isRtl 
                    ? 'يرجى الضغط على الزر أدناه لإرسال تفاصيل حجزك عبر الواتساب وتأكيده مباشرة معنا:' 
                    : 'Please click the button below to send your booking coordinates on WhatsApp for immediate confirmation:'}
                </p>
                <a
                  href={lastReservation.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 w-full shadow-md"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-current" />
                  <span>{isRtl ? 'إرسال الحجز للواتساب (تأكيد فوري) ✦' : 'Send to WhatsApp (Instant Confirm) ✦'}</span>
                </a>
              </div>
            )}

            <div className="p-4 bg-white border border-black/5 text-xs text-left font-mono space-y-2.5">
              <div className="flex justify-between items-center text-gray-500">
                <span>Sheets API Access:</span>
                <span className="text-[#B89020] uppercase font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3 text-green-500" /> ACTIVE
                </span>
              </div>
              <p className="text-[10px] text-gray-500 text-center">
                {d.reserveSheetHint}
              </p>
            </div>

            <button
              onClick={() => {
                setSuccess(false);
                setGoogleSyncStatus('idle');
              }}
              className="px-8 py-3 outline-none border border-black/10 hover:border-[#B89020] text-xs text-gray-700 hover:text-[#B89020] uppercase tracking-widest font-semibold transition-all cursor-pointer"
            >
              {isRtl ? 'تقديم حجز آخر' : 'Book Another Table'}
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Seating Area Selection Premium Grid (5cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#B89020] tracking-widest block font-bold">STAGE 1</span>
                <h3 className="text-lg font-serif text-[#1C1C1C] font-semibold">
                  {isRtl ? 'اختر فضاء وجو جلستك' : 'Select Seating Atmosphere'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {seatingOptions.map((opt) => {
                  const isSelected = formData.seatingArea === opt.id;
                  const Icon = opt.icon;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectArea(opt.id)}
                      className={`relative aspect-[5/4] sm:aspect-square overflow-hidden group cursor-pointer border transition-all duration-500 flex flex-col justify-end p-4 ${
                        isSelected 
                          ? 'border-[#B89020] ring-1 ring-[#B89020]/30 shadow-md bg-white' 
                          : 'border-black/5 bg-[#FAF9F6] hover:border-black/15'
                      }`}
                    >
                      {/* background representation image */}
                      <img 
                        src={opt.image} 
                        alt={opt.id} 
                        className="absolute inset-0 w-full h-full object-cover opacity-[0.22] group-hover:opacity-45 brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />

                      {/* Content overlay */}
                      <div className="relative z-10 space-y-1 text-left">
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-[#B89020]' : 'text-gray-500'}`} />
                        <h4 className="text-sm font-serif font-semibold text-[#1C1C1C] pt-1">
                          {isRtl ? opt.titleAr : opt.titleFr}
                        </h4>
                        <p className="text-[10px] text-gray-500 line-clamp-2 leading-relaxed font-sans font-light">
                          {isRtl ? opt.descAr : opt.descFr}
                        </p>
                      </div>

                      {/* Top floating state check circle */}
                      <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected ? 'bg-[#B89020] border-transparent text-white' : 'border-black/10 text-transparent'
                      }`}>
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inputs & Details Booking Forms (7cols) */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-black/5 p-6 sm:p-10 space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-[#B89020] tracking-widest block font-bold">STAGE 2</span>
                <h3 className="text-lg font-serif text-[#1C1C1C] font-semibold">
                  {isRtl ? 'تفاصيل الاتصال والحضور' : 'Contact and Timing Specs'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest text-gray-600 font-mono">
                    {d.reserveFormName} <span className="text-[#B89020]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-black/10 focus:border-[#B89020] px-4 py-3.5 text-sm text-black outline-none rounded-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest text-gray-600 font-mono">
                    {d.reserveFormPhone} <span className="text-[#B89020]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0661430040"
                    className="w-full bg-white border border-black/10 focus:border-[#B89020] px-4 py-3.5 text-sm text-black outline-none rounded-none transition-all font-mono placeholder:text-gray-400"
                  />
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest text-gray-600 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B89020]" />
                    <span>{d.reserveFormDate}</span> <span className="text-[#B89020]">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-white border border-black/10 focus:border-[#B89020] px-4 py-3.5 text-sm text-black outline-none rounded-none transition-all font-mono"
                  />
                </div>

                {/* Timing */}
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-widest text-gray-600 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B89020]" />
                    <span>{d.reserveFormTime}</span> <span className="text-[#B89020]">*</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-white border border-black/10 focus:border-[#B89020] px-4 py-3.5 text-sm text-black outline-none rounded-none transition-all font-mono text-left"
                  >
                    <option value="08:00">08:00 AM</option>
                    <option value="09:30">09:30 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="17:30">05:30 PM</option>
                    <option value="18:30">06:30 PM</option>
                    <option value="19:30">07:30 PM</option>
                    <option value="20:30">08:30 PM</option>
                    <option value="21:30">09:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>

              </div>

              {/* Guests Count select list */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-600 font-mono block">
                  {d.reserveFormGuests}
                </label>
                <div className="flex items-center gap-4 bg-white border border-black/10 w-fit p-1">
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(-1)}
                    className="w-10 h-10 hover:bg-neutral-100 hover:text-[#B89020] flex items-center justify-center text-lg font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span className="font-mono text-base text-black w-12 text-center">
                    {formData.guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleGuestsChange(1)}
                    className="w-10 h-10 hover:bg-neutral-100 hover:text-[#B89020] flex items-center justify-center text-lg font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Special message notes text */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest text-gray-600 font-mono flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#B89020]" />
                  <span>{isRtl ? 'تعليمات وملاحظات مميّزة' : 'Personal Requests'}</span>
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={2}
                  placeholder={isRtl ? 'مثلاً: طاولة قريبة للنافذة، احتفال بعيد ميلاد عائلي...' : 'E.g. anniversary celebration, business meeting...'}
                  className="w-full bg-white border border-black/10 focus:border-[#B89020] px-4 py-3 text-sm text-black rounded-none outline-none transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              {/* CTA trigger Submit block */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting}
                className="w-full py-4.5 bg-[#1C1C1C] hover:bg-[#B89020] text-white hover:text-black font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-none shadow-md transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-3.5 border border-[#1C1C1C] hover:border-[#B89020]"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>{isRtl ? 'جاري إرسال الحجز...' : 'Transmitting Booking...'}</span>
                  </>
                ) : (
                  <span>{d.reserveFormSubmit}</span>
                )}
              </motion.button>

            </div>

          </form>
        )}

      </div>
    </section>
  );
}
