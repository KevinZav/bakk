export const nameRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'-]{2,50}$/;
export const genderRegex = /^[\p{L}\s-]+$/u;
export const bioRegex = /^[a-zA-Z0-9\s.,;:!?"'()@#%&\-_\n\r]+$/;

export const nameErrorMessage = 'Names can only contains letters, spaces, accents, hyphens, and apostrophes';
export const genderErrorMessage = 'Gender can only contain letters, spaces, or hyphens';
export const bioErrorMessage = 'Bio contains invalid characters';