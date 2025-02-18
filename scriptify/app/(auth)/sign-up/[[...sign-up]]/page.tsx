import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div 
      style={{ 
        backgroundImage: `url('https://img.freepik.com/free-photo/3d-geometric-abstract-background_1048-15986.jpg?ga=GA1.1.1995634457.1738325960&semt=ais_hybrid')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <SignUp />
    </div>
  );
}
