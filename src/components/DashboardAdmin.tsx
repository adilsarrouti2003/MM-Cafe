import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Download, Trash2, CheckCircle2, XCircle, AlertCircle, Clock, ShieldCheck, Lock, LogOut, Sparkles, SlidersHorizontal, Share2, User } from 'lucide-react';
import { Language, DICTIONARY } from '../data';
import { Reservation } from '../types';
import MarketingKit from './MarketingKit';
import MarketingSection from './MarketingSection';

interface DashboardAdminProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  reservations: Reservation[];
  updateStatus: (id: string, status: 'confirmed' | 'cancelled') => void;
}

export default function DashboardAdmin({ language, isOpen, onClose, reservations, updateStatus }: DashboardAdminProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');
  const [activeTab, setActiveTab] = useState<'reservations' | 'marketing'>('reservations');

  const d = DICTIONARY[language];
  const isRtl = language === 'ar';

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim();
    // Accept either 'admin' or 'MM12344321MM' as the username, and ONLY 'MM12344321MM' as password
    if (
      (cleanUser.toLowerCase() === 'admin' || cleanUser === 'MM12344321MM') && 
      password === 'MM12344321MM'
    ) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg(isRtl ? 'اسم المستخدم أو كلمة المرور غير صحيحة!' : 'Incorrect username or password!');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  // Filter reservations
  const filteredReservations = reservations.filter(res => {
    const matchesSearch = 
      res.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      res.phone.includes(searchQuery);
    
    const matchesStatus = 
      statusFilter === 'all' || 
      res.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Export to CSV
  const exportToCSV = () => {
    if (filteredReservations.length === 0) return;
    
    let csvContent = 'data:text/csv;charset=utf-8,\uFEFF';
    csvContent += 'ID,Nom,Telephone,Date,Heure,Personnes,Statut,Notes,Cree le\r\n';
    
    filteredReservations.forEach(res => {
      const row = [
        res.id,
        `"${res.name.replace(/"/g, '""')}"`,
        `"${res.phone}"`,
        res.date,
        res.time,
        res.guests,
        res.status,
        `"${(res.notes || '').replace(/"/g, '""')}"`,
        res.createdAt
      ].join(',');
      csvContent += row + '\r\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Reservations_Cafe_MM_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#111111] border border-white/15 max-w-5xl w-full rounded-none overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Header bar */}
        <div className="bg-[#0A0A0A] p-5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25 rounded-none">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-white font-serif font-medium text-base sm:text-lg tracking-wide">
              {d.adminTitle}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white px-4 py-2 bg-neutral-900 border border-white/5 text-xs font-mono uppercase tracking-wider cursor-pointer transition-colors"
          >
            {isRtl ? 'إغلاق ✕' : 'Close ✕'}
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto flex-grow flex flex-col">
          
          {!isAuthenticated ? (
            /* Secure Login Gate */
            <div className="max-w-md w-full mx-auto my-auto py-12 space-y-6 text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8" />
              </div>
              
              <div className="space-y-4">
                <h4 className="text-white font-serif text-2xl font-light tracking-wide">
                  {isRtl ? 'بوابة الإدارة الراقية' : 'The Prestige Portal'}
                </h4>
                <p className="text-xs font-sans text-gray-400 max-w-sm mx-auto leading-relaxed">
                  {isRtl 
                    ? 'الرجاء إدخال اسم المستخدم وكلمة المرور الحيوية لتأمين الاتصال والمصادقة على الحجوزات.' 
                    : 'Please authenticate with your official administrator credentials to securely manage reservations and exclusive systems.'}
                </p>
                <div className="w-12 h-[1px] bg-[#D4AF37]/45 mx-auto" />
              </div>

              <form onSubmit={handleLogin} className="space-y-5 max-w-sm w-full mx-auto text-left bg-[#121110] border border-[#D4AF37]/20 p-8 rounded-3xl shadow-2xl relative z-10">
                {/* Username input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest font-black text-[#D4AF37] block px-1">
                    {isRtl ? 'الهوية المستعملة' : 'User Identity'}
                  </label>
                  <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center p-1 rounded-md bg-white/5 border border-white/10 group-focus-within:border-[#D4AF37]/40 group-focus-within:text-[#D4AF37] transition-all">
                      <User className="w-3.5 h-3.5 text-gray-400 group-focus-within:text-[#D4AF37]" />
                    </div>
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder={isRtl ? 'اسم المستخدم' : 'Username'}
                      className="w-full pl-12 pr-4 py-3 bg-black border border-white/10 focus:border-[#D4AF37] text-white rounded-full text-xs font-sans outline-none transition-all duration-300 placeholder-gray-600 focus:ring-1 focus:ring-[#D4AF37]/35"
                    />
                  </div>
                </div>

                {/* Password input */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest font-black text-[#D4AF37] block px-1">
                    {isRtl ? 'الرمز السري الآمن' : 'Secured Passcode'}
                  </label>
                  <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center justify-center p-1 rounded-md bg-white/5 border border-white/10 group-focus-within:border-[#D4AF37]/40 group-focus-within:text-[#D4AF37] transition-all">
                      <Lock className="w-3.5 h-3.5 text-gray-400 group-focus-within:text-[#D4AF37]" />
                    </div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-12 pr-4 py-3 bg-black border border-white/10 focus:border-[#D4AF37] text-white rounded-full text-xs font-sans outline-none transition-all duration-300 placeholder-gray-600 focus:ring-1 focus:ring-[#D4AF37]/35"
                    />
                  </div>
                </div>
                
                {errorMsg && (
                  <p className="text-red-400 text-[11px] font-sans font-medium flex items-center gap-1.5 justify-center py-1 mt-2 animate-bounce">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full mt-3 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#b3902f] hover:from-white hover:to-white text-black font-black text-xs tracking-widest uppercase cursor-pointer rounded-full transition-all duration-300 shadow-xl hover:shadow-[#D4AF37]/10"
                >
                  {isRtl ? 'ولوج آمن كمسؤول ✦' : 'Authorize Credentials'}
                </button>
              </form>
            </div>
          ) : (
            /* Managed Dashboard view with tabs */
            <div className="space-y-6 flex-grow flex flex-col">
              
              {/* Tabs selector */}
              <div className="flex border-b border-white/5 pb-2">
                <button
                  onClick={() => setActiveTab('reservations')}
                  className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                    activeTab === 'reservations' 
                      ? 'border-[#D4AF37] text-white font-semibold' 
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  📝 {isRtl ? 'حجوزات الطاولات' : 'Table Bookings'}
                </button>
                <button
                  onClick={() => setActiveTab('marketing')}
                  className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                    activeTab === 'marketing' 
                      ? 'border-[#D4AF37] text-white font-semibold' 
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  🚀 {isRtl ? 'أدوات الترويج والتسويق' : 'Marketing Toolkit'}
                </button>
              </div>

              {activeTab === 'reservations' ? (
                /* RESERVATION LIST VIEW */
                <div className="space-y-6 animate-fade-in">
                  
                  {/* Header Metrics */}
                  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between bg-black p-4 border border-white/5">
                    <div className="flex items-center gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400 block">{d.adminTotal}</span>
                        <span className="text-2xl font-mono font-medium text-[#D4AF37]">
                          {reservations.length}
                        </span>
                      </div>
                      <div className="w-[1px] h-8 bg-white/5" />
                      <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-emerald-500 font-bold bg-emerald-500/5 px-2.5 py-1 flex-row">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                        <span>{isRtl ? 'مُؤمّن بالكامل' : 'FULLY SECURED'}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={exportToCSV}
                        disabled={filteredReservations.length === 0}
                        className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-white/5 hover:border-[#D4AF37] text-gray-300 hover:text-[#D4AF37] text-xs font-mono uppercase tracking-widest transition-all disabled:opacity-50 cursor-pointer text-center justify-center rounded-none"
                      >
                        <Download className="w-4 h-4" />
                        <span>{d.adminExportCSV}</span>
                      </button>

                      <button
                        onClick={handleLogout}
                        className="p-2.5 bg-neutral-900 hover:bg-red-950/40 text-gray-400 hover:text-red-400 border border-white/5 hover:border-red-900/30 transition-all cursor-pointer"
                        title="Logout"
                      >
                        <LogOut className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  </div>

                  {/* Filter Toolbar */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={d.adminSearchPlaceholder}
                        className="w-full bg-black border border-white/5 focus:border-[#D4AF37] pl-10 pr-4 py-3 text-xs sm:text-sm outline-none text-white rounded-none font-sans"
                      />
                    </div>

                    <div className="flex bg-black p-1 border border-white/5 overflow-x-auto select-none rounded-none">
                      {(['all', 'pending', 'confirmed', 'cancelled'] as const).map(status => (
                        <button
                          key={status}
                          onClick={() => setStatusFilter(status)}
                          className={`px-3 py-2 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                            statusFilter === status
                              ? 'bg-[#D4AF37] text-black font-semibold'
                              : 'text-gray-400 hover:text-[#D4AF37]'
                          }`}
                        >
                          {status === 'all' && (isRtl ? 'الكل' : 'All')}
                          {status === 'pending' && d.adminStatusPending}
                          {status === 'confirmed' && d.adminStatusConfirmed}
                          {status === 'cancelled' && d.adminStatusCancelled}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Listings Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[45vh] overflow-y-auto pr-1">
                    {filteredReservations.length === 0 ? (
                      <div className="col-span-1 md:col-span-2 text-center py-12 bg-black/40 border border-dashed border-white/5 rounded-none">
                        <p className="text-gray-500 font-mono text-xs">{d.adminNoReservations}</p>
                      </div>
                    ) : (
                      filteredReservations.map((res: Reservation) => (
                        <div 
                          key={res.id}
                          className="p-4 bg-black border border-white/5 relative hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between rounded-none"
                        >
                          <div>
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-mono text-[10px] bg-neutral-900 border border-white/5 text-[#D4AF37] px-2.5 py-1 font-bold">
                                {res.id}
                              </span>
                              
                              <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border ${
                                res.status === 'confirmed' ? 'bg-emerald-950/20 text-emerald-400 border-emerald-500/20' :
                                res.status === 'cancelled' ? 'bg-red-950/20 text-red-500 border-red-500/20' :
                                'bg-amber-950/20 text-amber-500 border-amber-550/20'
                              }`}>
                                {res.status === 'confirmed' && d.adminStatusConfirmed}
                                {res.status === 'cancelled' && d.adminStatusCancelled}
                                {res.status === 'pending' && d.adminStatusPending}
                              </span>
                            </div>

                            <div className={`space-y-1 mb-3 ${isRtl ? 'text-right' : 'text-left'}`}>
                              <h4 className="text-white text-sm font-semibold">{res.name}</h4>
                              <a 
                                href={`https://wa.me/212${res.phone.replace(/^0/, '')}`} 
                                target="_blank" 
                                rel="noreferrer"
                                className="text-[#D4AF37] font-mono text-xs hover:underline block"
                              >
                                {res.phone}
                              </a>
                            </div>

                            <div className="grid grid-cols-3 gap-2 bg-[#0A0A0A] p-2.5 text-center mb-3 text-[10px] font-mono">
                              <div>
                                <span className="block text-gray-500 uppercase font-bold">{isRtl ? 'اليوم' : 'Date'}</span>
                                <span className="text-white font-medium">{res.date}</span>
                              </div>
                              <div>
                                <span className="block text-gray-500 uppercase font-bold">{isRtl ? 'الوقت' : 'Heure'}</span>
                                <span className="text-white font-medium">{res.time}</span>
                              </div>
                              <div>
                                <span className="block text-gray-500 uppercase font-bold">{isRtl ? 'الأفراد' : 'Places'}</span>
                                <span className="text-[#D4AF37] font-bold">{res.guests}</span>
                              </div>
                            </div>

                            {res.notes && (
                              <p className="text-[11px] text-gray-400 italic bg-white/5 p-2 rounded-none mb-3 font-sans">
                                "{res.notes}"
                              </p>
                            )}
                          </div>

                          {res.status === 'pending' && (
                            <div className="flex gap-2 mt-2.5 border-t border-white/5 pt-3">
                              <button
                                onClick={() => updateStatus(res.id, 'confirmed')}
                                className="flex-grow flex items-center justify-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 text-white p-2 rounded-none text-xs font-mono uppercase tracking-wider cursor-pointer"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>{isRtl ? 'موافقة' : 'Confirm'}</span>
                              </button>
                              <button
                                onClick={() => updateStatus(res.id, 'cancelled')}
                                className="flex-grow flex items-center justify-center gap-1.5 bg-red-950/30 hover:bg-red-900 border border-red-900/40 text-red-100 p-2 rounded-none text-xs font-mono uppercase tracking-wider cursor-pointer"
                              >
                                <XCircle className="w-3.5 h-3.5" />
                                <span>{isRtl ? 'إلغاء' : 'Cancel'}</span>
                              </button>
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>

                </div>
              ) : (
                /* MARKETING AND CAMPAIGNS WORKSPACE VIEW (IMPORTED BENTO) */
                <div className="space-y-8 animate-fade-in max-h-[60vh] overflow-y-auto pr-2">
                  <div className="bg-black/40 border border-[#D4AF37]/20 p-5 rounded-none text-center">
                    <p className="text-[#D4AF37] font-serif font-light text-base sm:text-lg">
                      {isRtl ? 'صندوق إدارة الترويج والتحكم بالعروض' : 'Proactive Conversion & Campaign Manager'}
                    </p>
                    <p className="text-[11px] text-gray-400 font-mono mt-1 uppercase tracking-widest">
                      {isRtl ? 'مخفي بالكامل عن زبائن المقهى العاديين' : 'Secluded with complete transparency from general audiences'}
                    </p>
                  </div>
                  
                  <MarketingKit language={language} />
                  <MarketingSection language={language} />
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
