'use server';

import { z } from 'zod';
import { generateProjectSummary as genSummaryAPICall } from '@/ai/flows/generate-project-summary'; // Renamed to avoid conflict

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export interface ContactFormState {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    general?: string[];
  } | null;
  success?: boolean;
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
      success: false,
    };
  }

  try {
    // In a real app, you'd send an email or save to a database here
    console.log('Contact form submitted:', validatedFields.data);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'Your message has been sent successfully! Thank you.',
      errors: null,
      success: true,
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      errors: { general: ['An unexpected error occurred.'] },
      success: false,
    }
  }
}


export async function generateProjectSummaryAction(rawDescription: string): Promise<{ summary?: string; error?: string }> {
  if (!rawDescription || rawDescription.trim() === "") {
    return { error: 'Project data cannot be empty.' };
  }
  try {
    // Ensure the AI function is correctly imported and called
    const result = await genSummaryAPICall({ projectData: rawDescription });
    if (result && result.summary) {
      return { summary: result.summary };
    } else {
      return { error: 'AI failed to generate a summary. Received unexpected response.'}
    }
  } catch (error) {
    console.error('Error generating project summary:', error);
    // Check if error is an instance of Error to access message property
    const errorMessage = error instanceof Error ? error.message : 'Unknown error during summary generation.';
    return { error: `Failed to generate summary: ${errorMessage}. Please try again.` };
  }
}
