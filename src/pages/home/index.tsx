// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  AboutMeArea,
} from "./style";
import { TypeWriter } from "@/components/Typewriter";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/Portifolio-V1`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <TypeWriter text="Olá, meu nome é Pedro :)" hideCursor delay={100}/>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            Eu{" "}
              <Text as="span" type="heading1" color="brand1">
                Adoro
              </Text>{" "}
              criar e{" "}
              <Text as="span" type="heading1" color="brand1">
                desenvolver
              </Text>{" "}
              projetos
            </Text>
            <Text type="body1" color="grey2">
              Descubra aqui neste ambiente, criado especialmente para você, todos meus projetos e tecnologias
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Código do portifólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <AboutMeArea>
        <Container>
          <Text as="h2" type="heading2" color="grey4">
            Sobre mim
          </Text>
          <Text as="p" type="body1" color="grey2">
            Sou um desenvolvedor fullstack fascinado por tecnologia e as infinitas possibilidades que ela oferece. Dedico meus esforço sempre para me atualizar e aprimorar minhas habilidades. Sou uma pessoa comunicativa, criativa, curiosa e com interesse em aprender sempre, buscando novos desafios e oportunidades de crescimento profissional.
            <br />
            Hoje, tenho experiência em criar websites e aplicações web responsivas e funcionais, com habilidades em HTML, CSS, JavaScript, Typescript, React, na parte de front-end. Na parte de back-end utilizo NodeJs, Python com Django, e bancos de dados relacionais, além de diversas ferramentas que auxiliam no desenvolvimento dos projetos. Além disso, sou familiarizado com SCRUM.
            <br />
            Tive também um breve momento em que repassei o meu conhecimento para os alunos da Kenzie Academy Brasil trabalhando como monitor, foi uma experiência incrível e enriquecedora. 
            Estou sempre em busca de novos desafios e oportunidades para trabalhar em projetos em equipe e colaborar com outros profissionais da área. Vamos trabalhar juntos?
          </Text>
        </Container>
      </AboutMeArea>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus{" "}
                <Text as="span" color="brand5">
                  projetos particulares
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
