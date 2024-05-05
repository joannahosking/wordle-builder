const Key = (props) => {
  const { letter } = { ...props };

  return <button>{letter}</button>;
};

const Keys = () => {
  return (
    <div className="keyboard">
      <div className="set">
        <Key letter="q" />
        <Key letter="w" />
        <Key letter="e" />
        <Key letter="r" />
        <Key letter="t" />
        <Key letter="y" />
        <Key letter="u" />
        <Key letter="i" />
        <Key letter="o" />
        <Key letter="p" />
      </div>
      <div className="set">
        <Key letter="a" />
        <Key letter="s" />
        <Key letter="d" />
        <Key letter="f" />
        <Key letter="g" />
        <Key letter="h" />
        <Key letter="j" />
        <Key letter="k" />
        <Key letter="l" />
      </div>
      <div className="set">
        <Key letter="del" />
        <Key letter="z" />
        <Key letter="x" />
        <Key letter="c" />
        <Key letter="v" />
        <Key letter="b" />
        <Key letter="n" />
        <Key letter="m" />
        <Key letter="ent" />
      </div>
    </div>
  );
};

export default Keys;
