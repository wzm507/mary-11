import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, MessageSquare, User } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_123456',
        template_id: 'template_123456',
        user_id: 'user_123456',
        template_params: {
          ...data,
          to_email: '15305443429@163.com'
        }
      });
      toast.success('信息已成功发送，我们会尽快与您联系！');
      reset();
    } catch (error) {
      console.error('发送邮件失败:', error);
      toast.error('信息发送失败，请稍后再试或直接联系我们');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-6">联系我们</h4>
            
            <div className="bg-transparent p-0">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: '请输入您的姓名' })}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-amber-500 text-white placeholder-gray-400"
                    placeholder="您的姓名"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: '请输入您的邮箱',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '请输入有效的邮箱地址'
                      }
                    })}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-amber-500 text-white placeholder-gray-400"
                    placeholder="您的邮箱"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-amber-500 text-white placeholder-gray-400"
                    placeholder="您的电话 (可选)"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="w-full pl-10 pr-4 py-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-amber-500 text-white placeholder-gray-400"
                    placeholder="您的留言 (可选)"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <span>发送中...</span>
                  ) : (
                    <>
                      <span>提交信息</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">联系方式</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+971 52 7476335</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+86 15248027276</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>postmaster@marylee-yc.com</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>marylee2025@163.com</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/image-dvr7kt5n9mvaw4v301bkpu5bn310d6.png" 
                alt="微信二维码" 
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img 
                src="https://s3plus.sankuai.com/nocode-external/nocode_image/default/%E7%94%BB%E6%9D%BF%209-g08mcpayb5nfd6fgjoqgmw6ib6b95j.png" 
                alt="WhatsApp二维码" 
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">工作地址</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>迪拜市中心商务区<br/>迪拜塔商务中心15层</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>广东省广州市番禺区<br/>基盛中心大厦A座28层</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition">隐私政策</a>
            <a href="#" className="text-gray-400 hover:text-white transition">使用条款</a>
            <a href="#" className="text-gray-400 hover:text-white transition">网站地图</a>
          </div>
          <p className="text-gray-400">© 2024 保留所有权利</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
