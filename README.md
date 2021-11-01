8.3

tsconfig에서 typescript의 어떤 기능을 사용할지 정할 수 있다.

8.4
interface interfaceName{

}
class App extends Components<{}, interfaceName>{

}
등의 형태로 state의 type을 정의해줄 수 있다.

8.5
props의 형태를 정할 때는
const FunctionName: React.FunctionComponent<InterfaceName> = () =>
과 같은 형태로 props의 interface를 명시해주어야한다.

8.8
theme을 사용하면 styled의 props내에서 theme안의 property들이 공유된다.
props.theme.이름 등의 방법으로 사용가능하다.
styled.d.ts에서 theme의 property들의 type을 지정해줄 수 있다.
