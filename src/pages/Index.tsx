import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/85cf5a33-8da8-44c4-bc63-f4f5f796aa14/files/f5580e35-8d0c-4247-84da-5e9e23a87c6a.jpg';
const INTERIOR_IMG = 'https://cdn.poehali.dev/projects/85cf5a33-8da8-44c4-bc63-f4f5f796aa14/files/99938235-f951-472a-b6e6-018ce0ccf767.jpg';

const nav = [
  { id: 'about', label: 'О бане' },
  { id: 'services', label: 'Услуги' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const services = [
  { icon: 'Truck', title: 'Доставка', text: 'Привезём баню по указанному адресу в городе и за его пределами в удобное время.', price: 'от 1 500 ₽' },
  { icon: 'Wrench', title: 'Установка', text: 'Развернём, подключим воду и растопим печь — вам останется только зайти и париться.', price: 'бесплатно' },
  { icon: 'Leaf', title: 'Банные принадлежности', text: 'Дубовые и берёзовые веники, ароматные масла, полотенца, шапочки и травяные чаи.', price: 'от 300 ₽' },
];

const features = [
  { icon: 'Users', title: 'До 6 человек', text: 'Просторный парной зал и тёплая комната отдыха' },
  { icon: 'Flame', title: 'Дровяная печь', text: 'Настоящий жар и аромат живого огня' },
  { icon: 'Droplets', title: 'Душ и купель', text: 'Прохладная вода после горячего пара' },
  { icon: 'MapPin', title: 'Где угодно', text: 'У дома, на даче, у озера или в лесу' },
];

const gallery = [HERO_IMG, INTERIOR_IMG, HERO_IMG, INTERIOR_IMG];

const reviews = [
  { name: 'Анна и Сергей', text: 'Заказывали баню на дачу — впечатления невероятные! Привезли, установили, всё растопили. Пар мягкий, дерево пахнет потрясающе.', stars: 5 },
  { name: 'Дмитрий', text: 'Отмечали день рождения у озера. Баня на колёсах — лучшее решение. Веники, чай, всё включено. Однозначно закажем ещё.', stars: 5 },
  { name: 'Марина', text: 'Уютно, тепло и по-домашнему. Ребята вежливые, помогли со всем. Чувствуешь себя как в настоящей деревенской бане.', stars: 5 },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground grain">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
            <Icon name="Flame" className="text-accent" size={26} />
            <span className="font-display text-2xl font-semibold tracking-tight">Баня на колёсах</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">
            Забронировать
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <div className="container flex flex-col py-4 gap-1">
              {nav.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-3 text-base font-medium">
                  {n.label}
                </button>
              ))}
              <Button onClick={() => scrollTo('contacts')} className="mt-2 bg-accent text-accent-foreground rounded-full">Забронировать</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Мобильная баня в зимнем лесу" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a1a0e]/85 via-[#2a1a0e]/55 to-transparent" />
        </div>
        <div className="container relative z-10 py-24">
          <p className="animate-float-up text-accent font-medium tracking-[0.25em] uppercase text-sm mb-5">Тепло, которое приезжает к вам</p>
          <h1 className="animate-float-up font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-[#f7ede0] leading-[0.95] max-w-3xl text-balance" style={{ animationDelay: '0.1s' }}>
            Настоящая баня в любом месте
          </h1>
          <p className="animate-float-up mt-7 text-lg md:text-xl text-[#f7ede0]/80 max-w-xl leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Аренда мобильной бани на прицепе. Дровяная печь, ароматное дерево и душевная атмосфера — мы привезём, установим и растопим.
          </p>
          <div className="animate-float-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
            <Button onClick={() => scrollTo('contacts')} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 h-14 text-base">
              Забронировать баню
            </Button>
            <Button onClick={() => scrollTo('services')} size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-transparent border-[#f7ede0]/40 text-[#f7ede0] hover:bg-[#f7ede0]/10 hover:text-[#f7ede0]">
              Наши услуги
            </Button>
          </div>
          <div className="animate-float-up mt-14 flex flex-wrap gap-8 text-[#f7ede0]" style={{ animationDelay: '0.4s' }}>
            {[['6', 'человек'], ['100°', 'жара'], ['24/7', 'доставка']].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-4xl font-semibold">{n}</div>
                <div className="text-sm text-[#f7ede0]/70">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={INTERIOR_IMG} alt="Интерьер бани" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-card border border-border rounded-2xl shadow-xl p-5 max-w-[200px]">
              <Icon name="Flame" className="text-accent mb-2" size={28} />
              <p className="font-medium text-sm">Живой жар дровяной печи и аромат кедра</p>
            </div>
          </div>
          <div>
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">О бане</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-balance">Уют деревенской бани без хлопот</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Наша баня обшита натуральным кедром и сосной, оборудована дровяной печью, душем и тёплой комнатой отдыха. Мы привезём её прямо к вам — на дачу, к озеру или во двор дома.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Icon name={f.icon} className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Услуги</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">Всё для идеального пара</h2>
            <p className="text-muted-foreground text-lg mt-4">Берём на себя доставку, установку и все мелочи, чтобы вы просто наслаждались отдыхом.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {services.map((s) => (
              <div key={s.title} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Icon name={s.icon} className="text-accent group-hover:text-accent-foreground transition-colors" size={26} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{s.text}</p>
                <span className="inline-block text-sm font-semibold text-primary bg-secondary rounded-full px-4 py-1.5">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Галерея</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">Атмосфера нашей бани</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i % 3 === 0 ? 'row-span-2' : ''}`}>
                <img src={img} alt={`Баня ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 md:py-32 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Отзывы</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-balance">Что говорят гости</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border rounded-2xl p-8 flex flex-col">
                <div className="flex gap-1 mb-4 text-accent">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-accent" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed flex-1 italic">«{r.text}»</p>
                <p className="font-display text-xl font-semibold mt-6">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 md:py-32">
        <div className="container">
          <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center overflow-hidden relative">
            <div>
              <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Контакты</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6 text-balance">Забронируйте баню уже сегодня</h2>
              <p className="text-primary-foreground/75 text-lg mb-8 leading-relaxed">
                Свяжитесь с нами, и мы подберём удобное время, привезём баню и подготовим всё для вашего отдыха.
              </p>
              <div className="space-y-4">
                <a href="tel:+70000000000" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Icon name="Phone" size={20} />
                  </div>
                  <span className="text-lg font-medium">+7 (000) 000-00-00</span>
                </a>
                <a href="mailto:hello@banya.ru" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Icon name="Mail" size={20} />
                  </div>
                  <span className="text-lg font-medium">hello@banya.ru</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <Icon name="Clock" size={20} />
                  </div>
                  <span className="text-lg font-medium">Ежедневно, 24/7</span>
                </div>
              </div>
            </div>
            <form className="bg-card text-card-foreground rounded-2xl p-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-display text-2xl font-semibold">Оставьте заявку</h3>
              <input className="w-full h-12 px-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-accent" placeholder="Ваше имя" />
              <input className="w-full h-12 px-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-accent" placeholder="Телефон" />
              <input className="w-full h-12 px-4 rounded-xl border border-border bg-background outline-none focus:ring-2 focus:ring-accent" placeholder="Желаемая дата" />
              <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl text-base">Отправить заявку</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="text-accent" size={20} />
            <span className="font-display text-lg font-semibold text-foreground">Баня на колёсах</span>
          </div>
          <p>© 2026 Аренда мобильной бани. Тепло в каждой поездке.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
