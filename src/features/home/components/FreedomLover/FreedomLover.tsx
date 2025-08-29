/** Freedom lover. */
export default function FreedomLover() {
  return (
    <section className="flex items-center justify-center pt-20 pb-24">
      <div className="max-w-8xl flex w-full flex-col gap-16 px-9">
        <div className="flex flex-col gap-4">
          <h2 className="font-inter text-4xl font-semibold">Freedom Lover</h2>
          <p className="font-inter max-w-[660px] text-base font-semibold text-neutral-600">
            Ideologies are strategies, not destinies. <span className="font-bold text-blue-500">Capitalism</span>,{' '}
            <span className="font-bold text-red-600">Communism</span>, even{' '}
            <span className="font-bold text-neutral-800">Fascism</span> - victory belongs to those who use them with
            discipline, not those who worship them.
          </p>
        </div>
      </div>
    </section>
  );
}
