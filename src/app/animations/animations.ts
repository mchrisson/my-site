import { trigger, state, style, animate, transition } from '@angular/animations';

const animations = [
  trigger('expand', [
    state('to', style({ width: '{{width}}'}), { params: {width: '0px'}}),
    transition('* => to', [animate('{{duration}}s ease-in')], { params: {duration: '1'}})
  ])
];

export default animations;
