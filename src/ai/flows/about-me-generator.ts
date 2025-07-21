'use server';

/**
 * @fileOverview Generates and refines an 'About Me' section for a portfolio website using AI.
 *
 * - aboutMeGenerator - A function that generates/refines the about me section.
 * - AboutMeGeneratorInput - The input type for the aboutMeGenerator function.
 * - AboutMeGeneratorOutput - The return type for the aboutMeGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AboutMeGeneratorInputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  title: z.string().describe('The job title of the person.'),
  experience: z
    .string()
    .describe(
      'Details about the person\'s professional experience, including company names, roles, and responsibilities.'
    ),
  projects: z
    .string()
    .describe(
      'A list of projects the person has worked on, including descriptions and links if available.'
    ),
  education: z
    .string()
    .describe(
      'Details about the person\'s education, including degrees, university names, and graduation year.'
    ),
  skills: z.string().describe('A list of the person\'s skills.'),
  achievements: z.string().describe('A list of the person\'s achievements.'),
});
export type AboutMeGeneratorInput = z.infer<typeof AboutMeGeneratorInputSchema>;

const AboutMeGeneratorOutputSchema = z.object({
  aboutMe: z.string().describe('A professionally written summary about the person.'),
});
export type AboutMeGeneratorOutput = z.infer<typeof AboutMeGeneratorOutputSchema>;

export async function aboutMeGenerator(input: AboutMeGeneratorInput): Promise<AboutMeGeneratorOutput> {
  return aboutMeGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aboutMeGeneratorPrompt',
  input: {schema: AboutMeGeneratorInputSchema},
  output: {schema: AboutMeGeneratorOutputSchema},
  prompt: `You are a professional resume writer. Generate a compelling "About Me" section for a portfolio website based on the following information:\n\nName: {{{name}}}\nTitle: {{{title}}}\nExperience: {{{experience}}}\nProjects: {{{projects}}}\nEducation: {{{education}}}\nSkills: {{{skills}}}\nAchievements: {{{achievements}}}\n\nWrite a concise and engaging summary that highlights the person's key skills, experiences, and achievements. The summary should be no more than 200 words.`,
});

const aboutMeGeneratorFlow = ai.defineFlow(
  {
    name: 'aboutMeGeneratorFlow',
    inputSchema: AboutMeGeneratorInputSchema,
    outputSchema: AboutMeGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
