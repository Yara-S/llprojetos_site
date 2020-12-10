import React from "react";
import tw from "twin.macro";
import {ReactComponent as EmailNewsletterIconBase } from "../../images/whatsapp.svg"
import {Container as ContainerBase } from "components/misc/Layouts.js"
import {SectionHeading} from "components/misc/Headings.js";
import {PrimaryButton} from "components/misc/Buttons.js";


const Container = tw(ContainerBase)`bg-secondary-500 -mx-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col lg:flex-row px-8`
const TextColumn = tw.div`flex items-center flex-col sm:flex-row`
const FormColumn = tw.div`mt-12 lg:mt-0 lg:ml-16 w-full sm:w-auto`

const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-green-500`
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-gray-100 sm:text-left leading-none`
const Description = tw.p`text-gray-500 font-medium text-sm max-w-sm mt-2 sm:mt-1 text-center sm:text-left`

const Form = tw.form`text-sm max-w-sm sm:max-w-none mx-auto`
const Input = tw.input`w-full sm:w-auto block sm:inline-block px-6 py-4 rounded bg-secondary-600 tracking-wider font-bold border border-secondary-600 focus:border-secondary-300 focus:outline-none sm:rounded-r-none hover:bg-secondary-500 transition duration-300 text-gray-200`
const Button = tw(PrimaryButton)`w-full sm:w-auto mt-6 sm:mt-0 sm:rounded-l-none py-4 bg-green-500 text-gray-100 hocus:bg-green-700 hocus:text-gray-300 border border-green-500 hocus:border-green-700`


const chat = "https://api.whatsapp.com/send?phone=5592982005752&text=Oi%20Luciano%2C%20gostaria%20de%20tirar%20algumas%20duvidas%20de%20projetos.%20Meu%20nome%20%C3%A9"


const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target[0].value)
  window.open(chat + "%20"+ e.target[0].value)
}

export default () => {
  return (
    <Container id="contato">
      <Content>
        <Row>
          <TextColumn>
            <EmailNewsletterIcon />
            <HeadingInfoContainer>
              <Heading>Tire suas dúvidas</Heading>
              <Description>(92) 98200-5752 ||  lucianolima.projetos@outlook.com  </Description>
            </HeadingInfoContainer>
          </TextColumn>
          <FormColumn>
          <Form onSubmit={handleSubmit}>
            <Input name="newsletter" type="text" placeholder="Escreva seu nome aqui" required />
            <Button type="submit">Enviar mensagem</Button>
          </Form>
          </FormColumn>
        </Row>
      </Content>
    </Container>
  );
};
