import Header from '@/components/header/header';
import NavBar from '@/components/navBar/navBar';
import Main from '@/components/main/Main';

export default function Home() {
  return (
    <div>
      <Header name="Arthur" tasksAmount={12} />
      <NavBar />
      <Main />
  
    </div>
  );
}
