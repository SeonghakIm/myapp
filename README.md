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
