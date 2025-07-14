/* eslint-disable @typescript-eslint/no-explicit-any */
// Helper function to generate consistent IDs that handle emojis
export const generateId = (children: any) => {
  return (
    String(children)
      .toLowerCase()
      // Remove emojis and other non-alphanumeric characters except spaces and basic punctuation
      .replace(
        /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu,
        ''
      )
      // Replace spaces with hyphens
      .replace(/\s+/g, '-')
      // Remove any remaining special characters except hyphens
      .replace(/[^\w-]/g, '')
      // Remove leading/trailing hyphens
      .replace(/^-+|-+$/g, '')
      // Replace multiple consecutive hyphens with single hyphen
      .replace(/-+/g, '-')
  );
};
