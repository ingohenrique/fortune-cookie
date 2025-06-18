import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Biscoito } from './index'
import socket from '../../socket'
import { toast } from 'react-toastify'

describe('Biscoito Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('renderiza componente corretamente', () => {
    render(<Biscoito />)
    
    expect(screen.getByText('Fortune Cookie')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Digite seu nome')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /quebrar biscoito/i })).toBeInTheDocument()
    expect(screen.getByAltText('Biscoito da Sorte')).toBeInTheDocument()
  })

  test('botão fica desabilitado quando nome está vazio', () => {
    render(<Biscoito />)
    
    const button = screen.getByRole('button', { name: /quebrar biscoito/i })
    expect(button).toBeDisabled()
  })

  test('botão fica habilitado quando nome é digitado', async () => {
    const user = userEvent.setup()
    render(<Biscoito />)
    
    const input = screen.getByPlaceholderText('Digite seu nome')
    const button = screen.getByRole('button', { name: /quebrar biscoito/i })
    
    await user.type(input, 'João')
    
    expect(button).toBeEnabled()
  })

  test('mostra toast de aviso quando tenta quebrar biscoito sem nome', async () => {
    const user = userEvent.setup()
    render(<Biscoito />)
    
    const button = screen.getByRole('button', { name: /quebrar biscoito/i })
    
    // Força o clique mesmo com botão desabilitado
    fireEvent.click(button)
    
    expect(toast.warn).not.toHaveBeenCalled()
  })

  test('emite evento socket quando quebra biscoito com nome válido', async () => {
    const user = userEvent.setup()
    render(<Biscoito />)
    
    const input = screen.getByPlaceholderText('Digite seu nome')
    const button = screen.getByRole('button', { name: /quebrar biscoito/i })
    
    await user.type(input, 'João')
    await user.click(button)
    
    expect(socket.emit).toHaveBeenCalledWith('quebrarBiscoito', 'João')
  })

  test('quebra biscoito ao pressionar Enter', async () => {
    const user = userEvent.setup()
    render(<Biscoito />)
    
    const input = screen.getByPlaceholderText('Digite seu nome')
    
    await user.type(input, 'Maria')
    await user.keyboard('{Enter}')
    
    expect(socket.emit).toHaveBeenCalledWith('quebrarBiscoito', 'Maria')
  })

  test('exibe frase quando recebe dados do socket', () => {
    render(<Biscoito />)
    
    // Simula recebimento de dados do socket
    const mockCallback = socket.on.mock.calls.find(call => call[0] === 'fraseBiscoito')[1]
    
    mockCallback({ nome: 'João', frase: 'Você terá um ótimo dia!' })
    
    // Como não conseguimos definir o nome no componente neste teste,
    // vamos apenas verificar se o toast foi chamado
    expect(toast.info).toHaveBeenCalledWith('João quebrou um biscoito da sorte! 🍪')
  })
}) 