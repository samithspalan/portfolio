
'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useActionState } from 'react'; // Changed from useFormState and react-dom
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from 'lucide-react';

const initialState: ContactFormState = {
  message: null,
  errors: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed here
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset(); // Reset form on success
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <Card className="shadow-lg w-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Get In Touch</CardTitle>
        <CardDescription>Fill out the form below to send me a message.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="name" className="font-semibold">Full Name</Label>
            <Input id="name" name="name" type="text" placeholder="John Doe" required className="mt-1" />
            {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(', ')}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="font-semibold">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required className="mt-1" />
            {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(', ')}</p>}
          </div>
          <div>
            <Label htmlFor="message" className="font-semibold">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message here..." required rows={5} className="mt-1" />
            {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(', ')}</p>}
          </div>
          {state.errors?.general && <p className="text-sm text-destructive mt-1">{state.errors.general.join(', ')}</p>}
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
