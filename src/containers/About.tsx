import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hello! My name is Ketan Raj and I enjoy creating innovative
            solutions that enhance the digital world. I began building custom
            projects and participating in hackathons, which taught me a lot
            about full-stack development.
          </p>
          <p>
            Fast-forward to today, I’ve had the privilege of working as a Web
            Developer Intern at{' '}
            <Link
              href="https://www.linkedin.com/company/bharat-intern/posts/?feedView=all/"
              target={'_blank'}
              className="text-accent"
            >
              Bharat Intern
            </Link>
            , where I significantly improved website functionality and user
            experience. I am currently a{' '}
            <Link className="text-accent">Co-founder </Link>
            of Shakuntla Traders, managing{' '}
            <Link href=" "  className="text-accent">
              1,000
            </Link>{' '}
            outlets and driving a 100% increase in sales.
          </p>
          <p>
            My main focus these days is developing accessible, user-friendly
            products and digital experiences. I also actively contribute to the
            Compiler Club, educating over 300 students in data structures,
            algorithms, and web development.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
