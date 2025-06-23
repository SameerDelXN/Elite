// 'use client';

// import Image from 'next/image';
// import { Linkedin, Star, Users, Award, ArrowRight, CheckCircle, Shield, Clock, TrendingUp } from 'lucide-react';

// export default function OfferPage() {
//   return (
//     <main className="min-h-screen bg-white font-sans">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-50/50 via-transparent to-transparent"></div>
//           <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-yellow-100/30 rounded-full blur-3xl"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 py-16">
//           {/* New Financial Year Offer */}
//           <div className="mb-24">
//             <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
//               <div className="flex flex-col lg:flex-row">
//                 <div className="lg:w-1/2 relative">
//                   <div className="relative h-96 lg:h-full">
//                     <Image
//                       src="/hero1.png"
//                       alt="New Financial Year Offer"
//                       width={600}
//                       height={400}
//                       className="object-cover w-full h-full"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                    
//                     {/* Floating Offer Badge */}
//                     <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
//                       Limited Time Offer
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
//                   <div className="space-y-6">
//                     <div>
//                       <div className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
//                         🎉 New Financial Year Special
//                       </div>
//                       <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
//                         Expert Financial 
//                         <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
//                           Consultation
//                         </span>
//                       </h1>
//                     </div>
                    
//                     <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
//                       <div className="text-center">
//                         <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
//                           20% OFF
//                         </div>
//                         <div className="text-gray-600 font-medium">
//                           1:1 Personalized Consultation
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="space-y-3">
//                       <div className="flex items-center text-gray-700">
//                         <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                         Expert financial guidance
//                       </div>
//                       <div className="flex items-center text-gray-700">
//                         <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                         Tailored loan solutions
//                       </div>
//                       <div className="flex items-center text-gray-700">
//                         <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
//                         Quick approval process
//                       </div>
//                     </div>
                    
//                     <button className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
//                       Book Consultation Now
//                       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Testimonial Section */}
//           <div className="mb-24">
//             <div className="max-w-4xl mx-auto">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                   Trusted by Thousands
//                 </h2>
//                 <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
//               </div>
              
//               <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 lg:p-12">
//                 <div className="text-center">
//                   <div className="flex justify-center mb-6">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
                  
//                   <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic font-medium">
//                     "BTech Loan_Wala made my loan process effortless! I got urgent funds with minimal hassle and expert guidance. Their team is professional, fast, and reliable. Highly recommend them!"
//                   </blockquote>
                  
//                   <div className="flex items-center justify-center">
//                     <div className="flex items-center">
//                       <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
//                         N
//                       </div>
//                       <div className="text-left">
//                         <p className="font-bold text-gray-900 text-lg">Navnath Tikode</p>
//                         <p className="text-gray-600">Verified Customer</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Connect Section */}
//           <div className="mb-24">
//             <div className="text-center">
//               <div className="mb-8">
//                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//                   Stay Connected
//                 </h2>
//                 <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
//                   Follow our journey on LinkedIn for insights, updates, and financial wisdom
//                 </p>
//                 <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
//               </div>
              
//               <a
//                 href="https://www.linkedin.com/company/btechloanwala/?viewAsMember=true"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
//               >
//                 <Linkedin className="w-6 h-6" />
//                 Follow on LinkedIn
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           </div>

//           {/* Free Loan Services */}
//           <div className="relative">
//             <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
//               <div className="flex flex-col lg:flex-row-reverse">
//                 <div className="lg:w-1/2 relative">
//                   <div className="relative h-96 lg:h-full">
//                     <Image
//                       src="/hero2.png"
//                       alt="Free Loan Services"
//                       width={600}
//                       height={400}
//                       className="object-cover w-full h-full"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent"></div>
                    
//                     {/* Floating Stats */}
//                     <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
//                       <div className="flex items-center gap-2">
//                         <Users className="w-5 h-5 text-green-600" />
//                         <span className="text-sm font-bold text-gray-900">25+ Partner Banks</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
//                   <div className="space-y-6">
//                     <div>
//                       <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
//                         <Award className="w-4 h-4 mr-1" />
//                         100% Free Service
//                       </div>
//                       <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
//                         Complete Loan
//                         <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
//                           Assistance
//                         </span>
//                       </h1>
//                     </div>
                    
//                     <p className="text-xl text-gray-600 leading-relaxed">
//                       From eligibility check to disbursement - we handle everything at zero cost to you.
//                     </p>
                    
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                       <div className="bg-gray-50 rounded-xl p-4 text-center">
//                         <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
//                         <div className="text-sm font-semibold text-gray-900">Secure Process</div>
//                       </div>
//                       <div className="bg-gray-50 rounded-xl p-4 text-center">
//                         <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
//                         <div className="text-sm font-semibold text-gray-900">Quick Approval</div>
//                       </div>
//                       <div className="bg-gray-50 rounded-xl p-4 text-center">
//                         <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
//                         <div className="text-sm font-semibold text-gray-900">Best Rates</div>
//                       </div>
//                     </div>
                    
//                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-gray-900 mb-2">
//                           ₹0 Service Fee
//                         </div>
//                         <div className="text-gray-600 font-medium">
//                           Complete loan processing assistance
//                         </div>
//                       </div>
//                     </div>
                    
//                     <button className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
//                       Start Free Process
//                       <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



'use client';

import Image from 'next/image';
import { Linkedin, Star, Users, Award, ArrowRight, CheckCircle, Shield, Clock, TrendingUp, Sparkles, Zap, Trophy } from 'lucide-react';

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
        {/* Hero Section - New Financial Year Offer */}
        <div className="mb-32">
          <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl border border-slate-600/30 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-cyan-500/20 transition-all duration-500">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex flex-col lg:flex-row relative z-10">
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="relative h-96 lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/80 to-purple-600/80 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <Sparkles className="w-16 h-16 mx-auto mb-4 animate-spin" style={{animationDuration: '3s'}} />
                      <div className="text-2xl font-bold mb-2">Financial Excellence</div>
                      <div className="text-sm opacity-90">Your Future Starts Here</div>
                    </div>
                  </div>
                  
                  {/* Floating Offer Badge */}
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    <Zap className="w-4 h-4 inline mr-1" />
                    Limited Time
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-500/30">
                      <Trophy className="w-4 h-4 mr-2" />
                      New Financial Year Special
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
                      Expert Financial 
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                        Consultation
                      </span>
                    </h1>
                  </div>
                  
                  <div className="relative bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-8 border border-orange-500/30 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl animate-pulse"></div>
                    <div className="text-center relative z-10">
                      <div className="text-4xl lg:text-5xl font-black text-white mb-3 drop-shadow-lg">
                        20% OFF
                      </div>
                      <div className="text-orange-200 font-semibold text-lg">
                        1:1 Personalized Consultation
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      'Expert financial guidance',
                      'Tailored loan solutions',
                      'Quick approval process'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-slate-200 group">
                        <CheckCircle className="w-6 h-6 text-emerald-400 mr-4 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Book Consultation Now</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mb-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Trusted by 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Thousands</span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mx-auto animate-pulse"></div>
            </div>
            
            <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl border border-slate-600/30 rounded-3xl shadow-2xl p-8 lg:p-16 group hover:shadow-purple-500/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="text-center relative z-10">
                <div className="flex justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current hover:scale-125 transition-transform cursor-pointer" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                
                <blockquote className="text-2xl lg:text-3xl text-slate-200 leading-relaxed mb-10 italic font-medium">
                  "BTech Loan_Wala made my loan process effortless! I got urgent funds with minimal hassle and expert guidance. Their team is professional, fast, and reliable. Highly recommend them!"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg">
                      N
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-white text-xl">Navnath Tikode</p>
                      <p className="text-slate-400 text-sm">Verified Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="mb-32">
          <div className="text-center">
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Stay 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Connected</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Follow our journey on LinkedIn for insights, updates, and financial wisdom
              </p>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto animate-pulse"></div>
            </div>
            
            <a
              href="https://www.linkedin.com/company/btechloanwala/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-blue-500/50 hover:from-blue-500 hover:to-blue-600 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Linkedin className="w-7 h-7 relative z-10" />
              <span className="relative z-10">Follow on LinkedIn</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </a>
          </div>
        </div>

        {/* Free Loan Services */}
        <div className="relative">
          <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl border border-slate-600/30 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-emerald-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex flex-col lg:flex-row-reverse relative z-10">
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="relative h-96 lg:h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 to-teal-600/80 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <Award className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                      <div className="text-2xl font-bold mb-2">Zero Cost Service</div>
                      <div className="text-sm opacity-90">Complete Assistance</div>
                    </div>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-bold text-white">25+ Partner Banks</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-emerald-500/30">
                      <Award className="w-4 h-4 mr-2" />
                      100% Free Service
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
                      Complete Loan
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-pulse">
                        Assistance
                      </span>
                    </h1>
                  </div>
                  
                  <p className="text-xl text-slate-300 leading-relaxed">
                    From eligibility check to disbursement - we handle everything at zero cost to you.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { icon: Shield, text: 'Secure Process', color: 'emerald' },
                      { icon: Clock, text: 'Quick Approval', color: 'cyan' },
                      { icon: TrendingUp, text: 'Best Rates', color: 'purple' }
                    ].map((item, index) => (
                      <div key={index} className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-600/30 hover:bg-slate-600/50 transition-all duration-300 group">
                        <item.icon className={`w-10 h-10 text-${item.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                        <div className="text-sm font-semibold text-white">{item.text}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="relative bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-500/30 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl animate-pulse"></div>
                    <div className="text-center relative z-10">
                      <div className="text-3xl font-black text-white mb-3">
                        ₹0 Service Fee
                      </div>
                      <div className="text-emerald-200 font-semibold">
                        Complete loan processing assistance
                      </div>
                    </div>
                  </div>
                  
                  <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Start Free Process</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}