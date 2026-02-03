import Header from '@/components/header/header';
import NavBar from '@/components/navBar/navBar';

export default function Home() {
  return (
    <div>
      <Header name="Arthur" tasksAmount={12} />
      <NavBar />
    </div>
  );
}
