

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, User } from 'lucide-react';

const PropertyCard = ({ property }) => {
  const [isConsultDialogOpen, setIsConsultDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleConsultClick = (e) => {
    e.stopPropagation();
    setIsConsultDialogOpen(true);
  };

  const handleDetailsClick = (e) => {
    e.stopPropagation();
    navigate(`/property/${property.slug || property.id}`, { state: property });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConsultDialogOpen(false);
    setIsConfirmDialogOpen(true);
  };

  const handleConfirm = () => {
    console.log('咨询提交:', { date, ...formData });
    alert('您的咨询已提交，我们会尽快与您联系！');
    setIsConfirmDialogOpen(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
    setDate(undefined);
  };

  // 检查是否是Mary精选项目9-16
  const isSoldOut = property.title && property.title.startsWith('Mary精选项目') && 
                   parseInt(property.title.split(' ')[1]) >= 9 && 
                   parseInt(property.title.split(' ')[1]) <= 16;

  return (
    <div 
      className="relative aspect-video overflow-hidden rounded-xl shadow-lg group"
    >
      <img 
        src={property.image} 
        alt={property.title} 
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50 flex flex-col justify-center p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="transform translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-bold mb-1 text-center">{property.title}</h3>
          <p className="text-base font-bold mb-2 text-center text-amber-400">{property.price}</p>
          
          <div className="flex justify-between w-full max-w-xs mx-auto mb-1">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-xs">{property.beds} 卧室</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">{property.baths} 浴室</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mb-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" />
              </svg>
              <span className="text-xs">{property.sqft} 平方英尺</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center space-x-2">
            {isSoldOut ? (
              <button 
                className="bg-gray-400 text-white px-4 py-2 rounded-lg font-medium cursor-not-allowed"
                disabled
                onClick={(e) => e.stopPropagation()}
              >
                已售空
              </button>
            ) : (
              <button 
                onClick={handleConsultClick}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                立即咨询
              </button>
            )}
            <button 
              onClick={handleDetailsClick}
              className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium transition"
            >
              房源信息
            </button>
          </div>
        </div>
      </div>

      <Dialog open={isConsultDialogOpen} onOpenChange={setIsConsultDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="text-center">预约咨询</DialogTitle>
            <DialogDescription className="text-center">
              请填写您的信息并选择预约日期
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="请输入您的姓名"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">电话</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="请输入联系电话"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="请输入邮箱地址"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">咨询内容</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="请输入您的具体咨询内容"
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="space-y-2">
                  <Label>选择预约日期</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    required
                  />
                </div>
                <div className="mt-auto pt-4">
                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
                    确认提交
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">确认提交</DialogTitle>
          </DialogHeader>
          <div className="py-6 text-center">
            <p className="text-lg mb-6">您确定要提交咨询请求吗？</p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setIsConfirmDialogOpen(false)}
                className="px-6"
              >
                取消
              </Button>
              <Button 
                onClick={handleConfirm}
                className="bg-amber-500 hover:bg-amber-600 px-6"
              >
                确认提交
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyCard;


