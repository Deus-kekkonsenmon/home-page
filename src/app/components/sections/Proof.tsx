const Proof = () => {
  return (
    <section id="proof" className="py-20">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[#57BEC7]">
          <div className="stat-item">
            <h2 className="text-4xl font-bold mb-8">2,000組</h2>
            <p className="text-lg">結婚式プロデュース経験</p>
          </div>
          <div className="stat-item">
            <h2 className="text-4xl font-bold mb-8">1,500組</h2>
            <p className="text-lg">幸せを見届けた組数</p>
          </div>
          <div className="stat-item">
            <h2 className="text-4xl font-bold mb-8">20社</h2>
            <p className="text-lg">業界オペレーション数</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;