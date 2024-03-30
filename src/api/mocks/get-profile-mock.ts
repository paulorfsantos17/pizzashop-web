import { http, HttpResponse } from 'msw'

import { IGetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, IGetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '(99)9999999099',
      createdAt: new Date(),
      role: 'manager',
      updatedAt: null,
    })
  },
)
