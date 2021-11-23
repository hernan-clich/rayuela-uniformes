import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select, { MultiValue } from 'react-select';
import CustomButton from '~components/CustomButton';
import { CProductSizes } from '~types/product';
import { CSchools, TSchoolIds } from '~types/schools';
import * as Styled from './styles';

type TFormData = {
  img: File;
  name: string;
  price: string;
  school: TSchoolIds;
};

type TMultiOptions = MultiValue<{ value: string; label: string }>;

function AddNewProductForm() {
  const schoolOptions = Object.entries(CSchools).map((school) => {
    const [id, name] = school;
    return { value: id as TSchoolIds, label: name };
  });
  const sizesOptions = Object.values(CProductSizes).map((size) => ({ value: size, label: size }));
  const [, setAvailableSizes] = useState<TMultiOptions>([]);

  const methods = useForm<TFormData>();
  const { handleSubmit, register } = methods;

  const handleAvailableSizesChange = (newValue: TMultiOptions): void => setAvailableSizes(newValue);

  // @todo: Remove console.log and do something useful please
  // eslint-disable-next-line no-console
  const onSubmit = (data: TFormData) => console.log(data);

  return (
    <Styled.AddNewProductFormContainer>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input type="text" {...register('name', { required: true, minLength: 8 })} />
        <label htmlFor="price">Precio</label>
        <input type="text" {...register('price', { required: true, minLength: 8 })} />
        <label htmlFor="school">Escuela</label>
        <Controller
          control={methods.control}
          name="school"
          rules={{ required: true }}
          render={({ field: { onChange } }) => (
            <Select
              options={schoolOptions}
              instanceId="schoolId"
              isMulti={false}
              closeMenuOnSelect
              placeholder="Escuela"
              noOptionsMessage={() => 'No hay más opciones'}
              onChange={(e) => onChange(e?.value)}
            />
          )}
        />
        <label htmlFor="img">IMG</label>
        <input
          id="img"
          type="file"
          {...register('img', { required: true })}
          accept="image/png"
          style={{ display: 'none' }}
        />
        <label htmlFor="available-sizes">Talles en los que viene el producto</label>
        <Select
          options={sizesOptions}
          instanceId="sizeId"
          name="available-sizes"
          isMulti
          closeMenuOnSelect={false}
          placeholder="Talles"
          noOptionsMessage={() => 'No hay más opciones'}
          onChange={handleAvailableSizesChange}
        />
        <CustomButton type="submit" size="small" weight="regular">
          Añadir
        </CustomButton>
      </form>
    </Styled.AddNewProductFormContainer>
  );
}

export default AddNewProductForm;
