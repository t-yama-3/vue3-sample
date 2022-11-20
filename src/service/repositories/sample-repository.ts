import type { Sample } from '@/model/sample';
import axiosInstance from '@/service/axios-instance';

class sampleRepository {
  async find(): Promise<Sample[]> {
    const response = await axiosInstance.get<Sample[]>('');
    return response.data;
  }
}

export default new sampleRepository();
