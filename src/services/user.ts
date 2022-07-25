import { api } from ".";

//добавить параметры в  getUser что бы можно было динамически менять results and page

//добавить pagination с ант дизайна

class UserService {
  async getUser(elementsPerPage: number, page: number): Promise<any> {
    const res = await api.get(
      `?seed=Shopper&results=${elementsPerPage}&page=${page}`
    );
    return res;
  }
}

export const userService = new UserService();
