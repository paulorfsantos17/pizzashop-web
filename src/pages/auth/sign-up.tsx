import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  })

  function handleSignUp(data: SignUpForm) {
    console.log('🚀 ~ file: sign-up.tsx:31 ~ handleSignUp ~ data:', data)
    toast.success('Restaurante cadastrado com sucesso', {
      action: {
        label: 'Login',
        onClick: () => navigate('/sign-in'),
      },
    })
  }

  return (
    <>
      <Helmet title="cadastro" />
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link to="/sign-in">Fazer Login</Link>
      </Button>
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátís
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <Button
              type="submit"
              className="w-full disabled:opacity-50 "
              disabled={isSubmitting}
            >
              Acessar painel
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar,você concorda com nossos{' '}
              <a href="#" className="underline underline-offset-4">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a href="#" className="underline underline-offset-4">
                {' '}
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}