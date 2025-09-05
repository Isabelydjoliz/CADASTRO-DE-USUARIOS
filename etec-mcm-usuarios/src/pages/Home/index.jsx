import './style.css'
import Lixeira from '../../assets/lixeira.png'

function Home(){
  const usuarios = [{
    id: '16',
    nome: 'Isa',
    idade: 17,
    email: 'isa@email.com'
  }, {
    id: '17',
    nome: 'mariazinha',
    idade: 17,
    email: 'mariazinha@email.com'
  },{
    id: '16',
    nome: 'isa',
    idade: 17,
    email: 'isa@email.com'
  }]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
          <input name='nome' type="text" />
          <input name='idade' type="number" />
          <input name='email' type="email" />
          <button type='button'>Cadastrar</button>
      </form>

    {usuarios.map(usuario =>(
      <div key={usuario.id} className='card'>
        <div>
          <p>Nome: {usuario.nome}</p>
          <p>Idade: {usuario.idade}</p>
          <p>Email: {usuario.email}</p>
        </div>
        <button>
          <img src={Lixeira} />
        </button>
    </div>
    ))}
  </div>
  )
}

export default Home