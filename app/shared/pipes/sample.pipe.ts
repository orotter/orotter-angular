import { Pipe, PipeTransform } from '@angular/core';
import { Sample } from '../models/index';

@Pipe({ name: 'sample' })
export class SamplePipe implements PipeTransform {
  transform(sample: Sample) {
    return `${sample.id} ${sample.name}`;
  }
}