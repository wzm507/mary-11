import React from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Mail, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const DeveloperCooperationDialog = ({ open, onOpenChange }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data) => {
    console.log('Developer cooperation form submitted:', data);
    alert(t('developerDialog.successMessage', { name: data.name, email: data.email }));
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center">{t('developerDialog.title')}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="name">
              {t('developerDialog.companyName')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-4 w-4 text-gray-400" />
              </div>
              <input
                id="name"
                type="text"
                {...register('name', { required: t('developerDialog.requiredCompanyName') })}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder={t('developerDialog.companyNamePlaceholder')}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="email">
              {t('developerDialog.contactEmail')}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: t('developerDialog.requiredEmail'),
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: t('developerDialog.invalidEmail')
                  }
                })}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder={t('developerDialog.emailPlaceholder')}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="phone">
              {t('developerDialog.contactPhone')}
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder={t('developerDialog.phonePlaceholder')}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="message">
              {t('developerDialog.cooperationIntent')}
            </label>
            <textarea
              id="message"
              rows={3}
              {...register('message')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder={t('developerDialog.messagePlaceholder')}
            />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
              {t('developerDialog.submit')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeveloperCooperationDialog;
