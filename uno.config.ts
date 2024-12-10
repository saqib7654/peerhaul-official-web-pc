// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import { presetWebFonts } from '@unocss/preset-web-fonts';
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno({ dark: 'class' }),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        primary: [
          {
            name: 'Roboto',
            weights: ['100', '300', '400', '500', '700', '900'],
            italic: true,
          },
        ],
        secondary: [
          {
            name: 'Nunito',
            weights: [
              '100',
              '200',
              '300',
              '400',
              '500',
              '600',
              '700',
              '800',
              '900',
            ],
            italic: true,
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-col-center': 'flex-center flex-col',
    'flex-x-center': 'flex justify-center',
    'flex-x-between': 'flex justify-between',
    'flex-y-center': 'flex items-center',
    'flex-y-between': 'flex flex-col justify-between',
    'flex-col': 'flex flex-col',
    'flex-col-stretch': 'flex-col items-stretch',
    'flex-1-hidden': 'flex-1 overflow-hidden',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden text-ellipsis',
    'transition-base': 'transition-all duration-300 ease-in-out',
  },
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1921px',
    },
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px',
    },
    colors: {
      primary: 'var(--primary-color)',
      text: 'var(--text-color)',
      sub_text: 'var(--sub-text-color)',
      danger: 'var(--danger-color)',
      primary_active: 'var(--primary-color-active)',
      info: 'var(--info-color)',
      info_active: 'var(--info-color-active)',
      success: 'var(--success-color)',
      warning: 'var(--warning-color)',
      error: 'var(--error-color)',
      dark: '#18181c',
      secondary: '#8b949e',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      maxWidth: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1312px',
        // '2xl': '1536px',
      },
    },
  },
});
