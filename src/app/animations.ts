import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const appearAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: "scale(1)"
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: "scale(0)"
            }),
            animate('0.3s ease-in')
        ]),
        transition(':leave', [
            animate('0.3s ease-in', style({
                opacity: 0,
                transform: "scale(0)"
            }))
        ])
    ]);