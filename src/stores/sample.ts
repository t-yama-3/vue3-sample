import type { Sample } from '@/model/sample';
import { defineStore } from 'pinia';
import sampleRepository from '@/service/repositories/sample-repository';

export const useStoreSample = defineStore('sample', {
  state: () => {
    return {
      samples: [] as Sample[],
    };
  },
  getters: {
    selectSamples(state) {
      return state.samples.filter((sample) => sample.flag);
    },
  },
  actions: {
    async fetchSamples() {
      const samples = await sampleRepository.find();
      this.samples = samples;
    },
  },
});
