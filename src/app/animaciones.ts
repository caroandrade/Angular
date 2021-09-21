import { trigger, state, style, animate, transition } from '@angular/animations';

export let aparecer =
    trigger('aparecer', [
        state('show', style({
          opacity: 1,
          transform: 'translateX(0%)',
        })),
        state('hide',   style({
          opacity: 0,
          transform: 'translateX(-300%)',
        })),
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('800ms ease-in'))
      ]);

