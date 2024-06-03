const GenderCheckbox = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="checkbox" name="gender" className="checkbox border-slate-900" />
        </label>{' '}
      </div>

      <div>
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="checkbox" name="gender" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
