/**
 * typescript에서 svg파일 타입을 찾을수 없다고 나올 경우 대비
 */
declare module '*.svg' {
  const value: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}
