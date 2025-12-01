"use client";

import * as React from 'react';
import { Text } from '@/stories/Text';
import { CheckCircle, TimesRegular } from '@/stories/icons';
import { Button } from '@/stories/Button';
import { Input } from '@/stories/Input';
import { BottomSheet } from '@/stories/BottomSheet';

export type ContactContent = {
  heading: string;
  description: string;
  points: string[];
  submitLabel?: string;
};

export interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  content: ContactContent;
  onSuccess?: (message: string) => void;
}

export const ContactModal = ({ open, onClose, content, onSuccess }: ContactModalProps) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches,
  );
  const [mounted, setMounted] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  );
  const [submitMessage, setSubmitMessage] = React.useState<string>('');

  React.useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia('(max-width: 1023px)');
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener?.('change', update);
    return () => mql.removeEventListener?.('change', update);
  }, []);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isMobile) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open, isMobile]);

  const FormContent = (
    <form
      className="flex flex-col gap-6"
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        try {
          setSubmitStatus('loading');
          setSubmitMessage('');
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: data.get('firstName'),
              lastName: data.get('lastName'),
              email: data.get('email'),
              phone: data.get('phone'),
              company: data.get('company'),
              size: data.get('size'),
              message: data.get('message'),
            }),
          });
          const json = await res.json().catch(() => ({}));
          if (res.ok && (json.ok === undefined || json.ok === true)) {
            setSubmitStatus('success');
            setSubmitMessage('Mesajınız gönderildi. Teşekkürler!');
            form.reset();
            onSuccess?.('Message sent successfully.');
            onClose();
          } else {
            setSubmitStatus('error');
            setSubmitMessage('Gönderim başarısız. Lütfen tekrar deneyin.');
          }
        } catch (err) {
          setSubmitStatus('error');
          setSubmitMessage('Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.');
        }
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3 md:mb-0">
        <Input name="firstName" label="First Name" floatingLabel="First Name" required />
        <Input name="lastName" label="Last Name" floatingLabel="Last Name" required />
      </div>
      <Input
        name="email"
        label="Business Email"
        floatingLabel="Business Email"
        type="email"
        required
      />
      <Input name="phone" label="Phone Number (optional)" floatingLabel="Phone Number (optional)" />
      <Input name="company" label="Company Name" floatingLabel="Company Name" required />
      <Input name="size" label="Company Size" floatingLabel="Company Size" />
      <textarea 
        name="message" 
        className="w-full p-3 px-3.5 border border-neutral-200 rounded-lg text-sm resize-y" 
        placeholder="How can we help you?" 
        rows={4} 
      />
      <label className="flex items-center gap-2 my-4 text-sm">
        <input type="checkbox" required />
        <span>I agree to the processing of my data for contact purposes.</span>
      </label>
      {submitMessage && (
        <div className={`mt-3 text-sm ${submitStatus === 'success' ? 'text-[#1eae4f]' : 'text-[#ec1f33]'}`}>
          {submitMessage}
        </div>
      )}
      <Button
        variant="primary"
        size="large"
        state={submitStatus === 'loading' ? 'disabled' : 'active'}
        disabled={submitStatus === 'loading'}
        className="self-center min-w-[200px] md:min-w-[200px] w-full md:w-auto"
      >
        {submitStatus === 'loading' ? 'Sending...' : content?.submitLabel || 'Get Started'}
      </Button>
    </form>
  );

  const LeftContent = (
    <div className="p-6 bg-transparent flex flex-col gap-3 self-stretch justify-center items-start text-left">
      <Text variant="display2" as="h2">
        {content.heading}
      </Text>
      <Text variant="body1">{content.description}</Text>
      <ul className="list-none p-0 mt-2 flex flex-col gap-3">
        {content.points?.slice(0, 3).map((pt, idx) => (
          <li key={idx} className="grid grid-cols-[24px_1fr] gap-3 items-start">
            <CheckCircle width={24} height={24} />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (!mounted) return null;

  if (isMobile) {
    if (!open) return null;
    return (
      <BottomSheet isOpen={open} onClose={onClose} bottomSheetText="">
        <Text variant="display2" as="h2">
          {content.heading}
        </Text>
        <Text variant="body1">{content.description}</Text>
        <ul className="list-none p-0 mt-3 flex flex-col gap-3">
          {content.points?.slice(0, 3).map((pt, idx) => (
            <li key={idx} className="grid grid-cols-[24px_1fr] gap-3 items-start">
              <CheckCircle width={24} height={24} />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
        <div className="w-full h-px bg-neutral-200 mt-6" />
        {FormContent}
      </BottomSheet>
    );
  }

  if (!open) return null;

  return (
    <dialog 
      ref={dialogRef} 
      className="p-8 w-[min(1216px,92vw)] max-h-[90vh] fixed inset-0 m-auto rounded-[36px] border-[0.5px] border-neutral-200 bg-[#fafafae5] backdrop-blur-[10px] overflow-visible z-[1000] [&::backdrop]:bg-black/20"
      onClose={onClose}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 p-0 md:p-0">
        {LeftContent}
        <div className="p-6 bg-white rounded-[20px] border-[0.5px] border-neutral-200">{FormContent}</div>
      </div>
      <form method="dialog" className="absolute top-0 right-0 translate-x-[30%] -translate-y-[30%] z-[3]">
        <Button
          variant="secondary"
          size="small"
          iconPosition="only"
          icon={<TimesRegular width={24} height={24} />}
          onClick={onClose}
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
        </Button>
      </form>
    </dialog>
  );
};

