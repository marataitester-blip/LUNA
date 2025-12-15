/**
 * Uses Pollinations.ai for free, limitless image generation.
 * This fits the requirement for a "free analog" to OpenRouter for images.
 */
export const generateImageUrl = (prompt: string): string => {
  const encodedPrompt = encodeURIComponent(prompt);
  // Random seed to ensure different images for same prompt
  const seed = Math.floor(Math.random() * 1000000); 
  return `https://image.pollinations.ai/prompt/${encodedPrompt}?seed=${seed}&width=800&height=800&nologo=true`;
};