import styled from "styled-components";
import { useFilter } from "../hooks/useFilter";
import { FilterTypes } from "../types/filter-types";
import Footer from "./footer";

interface FilterItemsProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemsProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--text-dark);

  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--blue-low)" : ""};
`;

const FilterContent = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const DivContent = styled.div`
  width: 700px;
  text-align: center;
  border-style: solid;
  border-bottom-width: 5px;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-color: var(--blue-low);
  padding: 20px;
`;

const ParaContent = styled.p`
  margin-bottom: 1em;
`;

const ParaContentTwo = styled.p`
  margin-bottom: 3em;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid var(--blue-low);
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  height: 200px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.button`
  font-family: inherit;
  font-size: 23px;
  color: white;
  margin-top: 100px;
  width: 300px;
  height: 60px;
  border: none;
  background-color: var(--blue-low);
  border-radius: 8px;
  cursor: pointer;
`;

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterTypes) => {
    setType(value);
  };

  const handleTabClick = (value: FilterTypes) => {
    if (type !== value) {
      handleChangeType(value);
    }
  };

  return (
    <>
      <FilterList>
        <FilterItem
          selected={type === FilterTypes.NEWS}
          onClick={() => handleTabClick(FilterTypes.NEWS)}
        >
          Novidades
        </FilterItem>
        <FilterItem
          selected={type === FilterTypes.US}
          onClick={() => handleTabClick(FilterTypes.US)}
        >
          Quem somos
        </FilterItem>
        <FilterItem
          selected={type === FilterTypes.PRODUCTS}
          onClick={() => handleTabClick(FilterTypes.PRODUCTS)}
        >
          Nossos Produtos
        </FilterItem>
        <FilterItem
          selected={type === FilterTypes.CONTACT}
          onClick={() => handleTabClick(FilterTypes.CONTACT)}
        >
          Contato
        </FilterItem>
      </FilterList>

      <FilterContent>
        {type === FilterTypes.NEWS && (
          <>
            <h2>O que os clientes dizem?</h2>
            <DivContent>
              <ParaContentTwo></ParaContentTwo>
              <p>"Usamos o sistema da HAMP desde 2022. Todos os alunos elogiam. Completo, rápido e eficiente"</p>
              <p>- Reitor da universidade XXXX</p>
            </DivContent>

            <DivContent>
              <ParaContentTwo></ParaContentTwo>
              <p>"TOP demais!"</p>
              <p>- Reitor da universidade XXXX</p>
            </DivContent>

            <DivContent>
              <ParaContentTwo></ParaContentTwo>
              <p>"Nota 10!"</p>
              <p>- Reitor da universidade XXXX</p>
            </DivContent>

            <DivContent>
              <ParaContentTwo></ParaContentTwo>
              <p>"Muito bom!"</p>
              <p>- Reitor da universidade XXXX</p>
            </DivContent>
          </>
        )}

        {type === FilterTypes.US && (
          <DivContent>
            <h2>Sobre nós</h2>
            <ParaContent>Somos uma empresa de tecnologia fundada em 2022, com a missão de transformar a forma como a educação é acessada e compartilhada. Nossa equipe é composta por apaixonados por tecnologia e educação, dedicados a criar soluções inovadoras para melhorar a aprendizagem e capacitar estudantes em todo o mundo.</ParaContent>
            <ParaContent>O nosso produto é uma plataforma de educação revolucionária, projetada para oferecer uma experiência de aprendizado envolvente, personalizada e acessível. Com uma ampla gama de recursos, nossa plataforma conecta alunos, professores e instituições de ensino, criando um ambiente colaborativo e estimulante.</ParaContent>
            <ParaContent>Acreditamos que a educação é a chave para o crescimento e desenvolvimento de indivíduos e comunidades. Por isso, trabalhamos incansavelmente para fornecer ferramentas poderosas que permitam que todos tenham acesso à educação de qualidade, independentemente de suas circunstâncias.</ParaContent>
            <ParaContent>Nossa visão é criar um futuro onde o conhecimento seja democratizado, capacitando indivíduos a alcançar seu pleno potencial e construir um mundo melhor. Estamos comprometidos em promover a inovação e o avanço na área da educação, oferecendo soluções flexíveis e adaptáveis às necessidades em constante evolução dos nossos usuários.</ParaContent>
            <ParaContent>Junte-se a nós nesta jornada educacional transformadora e faça parte da revolução da aprendizagem. Com nossa plataforma, o conhecimento está ao seu alcance.</ParaContent>
          </DivContent>
        )}

        {type === FilterTypes.PRODUCTS && (
          <div>
            <h2>Nossos Produtos</h2>
            <ImageContainer>
              <ProductCard>
                <ProductImage src="soft3.png" alt="Imagem 1" />
                <p>Sistema de gerenciamento educacional</p>
              </ProductCard>
              <ProductCard>
                <ProductImage src="soft2.png" alt="Imagem 2" />
                <p>Sistema de ensino remoto</p>
              </ProductCard>
              <ProductCard>
                <ProductImage src="soft1.jpg" alt="Imagem 3" />
                <p>Novidades em breve!</p>
              </ProductCard>
            </ImageContainer>
            <ButtonContainer onClick={() => handleTabClick(FilterTypes.CONTACT)}>
              Solicite um orçamento!
            </ButtonContainer>
          </div>
        )}

        {type === FilterTypes.CONTACT && (
          <div>
            <h2>Solicite seu orçamento com um de nossos representantes!</h2>
            <ImageContainer>
              <ProductCard>
                <ProductImage src="myimg.jpg" alt="Imagem 1" />
                <ParaContent>Andre</ParaContent>
                <ParaContent>Representante</ParaContent>
                <p>(48) 99888-4838</p>
              </ProductCard>
              <ProductCard>
                <ProductImage src="mathimg.jpg" alt="Imagem 2" />
                <ParaContent>Matheus</ParaContent>
                <ParaContent>Representante</ParaContent>
                <p>(48) 99888-4838</p>
              </ProductCard>
              <ProductCard>
                <ProductImage src="humimg.jpg" alt="Imagem 3" />
                <ParaContent>Humberto</ParaContent>
                <ParaContent>Representante</ParaContent>
                <p>(48) 99888-4838</p>
              </ProductCard>
              <ProductCard>
                <ProductImage src="pedroimg.jpg" alt="Imagem 3" />
                <ParaContent>Pedro</ParaContent>
                <ParaContent>Representante</ParaContent>
                <p>(48) 99888-4838</p>
              </ProductCard>
            </ImageContainer>
          </div>
        )}
      </FilterContent>

    </>
  );
}



