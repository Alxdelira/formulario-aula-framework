import React, { useState } from 'react';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Container from '@/components/Container';
import Form from '@/components/Form';
import GroupForm from '@/components/GroupForm';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Option from '@/components/Option';
import Radio from '@/components/Radio';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import Head from 'next/head';
import Thead from '@/components/Thead';
import Table from '@/components/Table';
import Tr from '@/components/Tr';
import Th from '@/components/Th';
import Tbody from '@/components/Tbody';
import Td from '@/components/Td';

export default function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [sexo, setSexo] = useState('');
  const [curso, setCurso] = useState('');
  const [atendimento, setAtendimento] = useState('');
  const [termos, setTermos] = useState(false);
  const [inscricoes, setInscricoes] = useState([]);

  console.log(nome);

  return (
    <>
      <Head>
        <title>Formulario</title>
        <meta name="description" content="Gerado pelo aplicativo create next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Form>
          <Label htmlFor="name">Nome:</Label>
          <Input
            id={nome}
            value={nome}
            name="name"
            tipo={"text"}
            onChange={(e) => setNome(e.target.value)}
            placeholder={"EX. Barba Negras"}
          />
          <Label htmlFor="email">Email:</Label>
          <Input
            id={email}
            value={email}
            name="email"
            tipo={"email"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"barbanegra@gnegra.negra"}
          />
          <Label htmlFor="sexo">Sexo:</Label>
          <GroupForm>
            <Radio
              name="sexo"
              value="masculino"
              checked={sexo === 'masculino'}
              onChange={(e) => setSexo(e.target.value)}
            >
              Masculino
            </Radio>
            <Radio
              name="sexo"
              value="feminino"
              checked={sexo === 'feminino'}
              onChange={(e) => setSexo(e.target.value)}
            >
              Feminino
            </Radio>
          </GroupForm>
          <Label htmlFor="curso">Curso:</Label>
          <Select value={curso} onChange={(e) => setCurso(e.target.value)}>
            <Option value={""}>Selecione um curso</Option>
            <Option value={"Html e Css"}>Html e Css</Option>
            <Option value={"Javascript"}>Javascript</Option>
            <Option value={"React"}>React</Option>
          </Select>
          <Label htmlFor="atendimento">Descreva o Atendimento especial:</Label>
          <TextArea
            id={atendimento}
            value={atendimento}
            onChange={(e) => setAtendimento(e.target.value)}
          />
          <Checkbox name="termos" checked={termos} onChange={(e) => setTermos(e.target.checked)}>Estou de acordo com o termos de serviço</Checkbox>
          <Button
            onClick={(e) => {
              e.preventDefault();
              const newInscricao = {
                nome,
                email,
                sexo,
                curso,
                atendimento,
                termos
              };
              setInscricoes([...inscricoes, newInscricao]);
              setNome('');
              setEmail('');
              setSexo('');
              setCurso('');
              setAtendimento('');
              setTermos(false);
            }}
          >Realizar Inscrição</Button>
        </Form>
      </Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Sexo</Th>
            <Th>Curso</Th>
            <Th>Atendimento</Th>
            <Th>Termos</Th>
          </Tr>
        </Thead>
    
        <Tbody>
          {inscricoes.map((inscricao, index) => (
            <Tr key={index}>
              <Td>{inscricao.nome}</Td>
              <Td>{inscricao.email}</Td>
              <Td>{inscricao.sexo}</Td>
              <Td>{inscricao.curso}</Td>
              <Td>{inscricao.atendimento}</Td>
              <Td>{inscricao.termos ? 'Sim' : 'Não'}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
}