import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller, FieldError } from 'react-hook-form';
import Select, { MultiValue } from 'react-select';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import Modal from '~components/Modal';
import ModalBody from '~components/ModalBody';
import { CCategories, TCategoryKeys } from '~constants/categories';
import PATHS from '~constants/paths';
import useDbCrud from '~hooks/useDbCrud';
import { EDbCollections } from '~types/db';
import { CProductSizes, TProduct, TProductSizes } from '~types/product';
import { CSchools, TSchoolIds } from '~types/schools';
import * as Styled from './styles';

type TMultiOptions = MultiValue<{ value: string; label: string }>;

type TFormData = {
  category: string;
  img: FileList;
  name: string;
  school: TSchoolIds;
  availableSizes: TMultiOptions;
  sizes: {
    name: TProductSizes;
    price: number;
    stock: boolean;
  }[];
};

function ProductForm() {
  const router = useRouter();
  const { id: productId } = router.query;
  const [docData, setDocData] = useState<TProduct | undefined>(undefined);

  const { addStorageFile, getDbDocument, storageUploadState, updateDbDocument } = useDbCrud(
    EDbCollections.products
  );
  const schoolOptions = Object.entries(CSchools).map((school) => {
    const [id, name] = school;
    return { value: id as TSchoolIds, label: name };
  });
  const categoryOptions = Object.entries(CCategories).map((category) => {
    const [id, name] = category;
    return { value: id as TCategoryKeys, label: name };
  });
  const sizesOptions = Object.values(CProductSizes).map((size) => ({ value: size, label: size }));

  useEffect(() => {
    if (productId && !docData) {
      setDocData(getDbDocument<TProduct>(productId as string));
    }
  }, [docData, getDbDocument, productId]);

  const methods = useForm<TFormData>();
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
    register
  } = methods;
  useFieldArray({ name: 'sizes', control });

  useEffect(() => {
    if (docData) {
      setValue('name', docData?.name);
      setValue('school', docData?.school);
      setValue('category', docData?.category);
      setValue(
        'availableSizes',
        docData?.sizes.map((size) => ({ label: size.name, value: size.name }))
      );
      setAvailableSizes(docData?.sizes.map((size) => ({ label: size.name, value: size.name })));
      setValue('sizes', docData?.sizes);
    }
  }, [docData, setValue]);

  const [showModal, setShowModal] = useState(false);
  const [availableSizes, setAvailableSizes] = useState<TMultiOptions>();
  const [image, setImage] = useState('');
  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setValue('img', e.target.files);
    }
  };

  const onSubmit = ({ availableSizes, category, img, name, school, sizes }: TFormData) => {
    const availableSizeValues = availableSizes.map((size) => size.value);
    const validSizes = sizes?.filter(
      (size) => availableSizeValues.includes(size.name) && Boolean(size.price)
    );

    const productToSave = {
      category,
      name,
      school,
      sizes: validSizes
    };

    if (productId) {
      updateDbDocument<TProduct>(productId as string, productToSave);
      setShowModal(true);
    } else addStorageFile(img[0], 'products', productToSave);
  };

  useEffect(() => {
    if (storageUploadState === 'success') setShowModal(true);
  }, [storageUploadState]);

  return (
    <Styled.ProductFormContainer>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="leftContainer">
          <CustomText as="label" htmlFor="name" size="small" weight="regular" textAlign="left">
            Nombre
          </CustomText>
          <input
            type="text"
            className="textInput"
            {...register('name', {
              required: 'Campo obligatorio',
              minLength: { value: 8, message: 'El valor debe ser mas largo' }
            })}
          />
          <CustomText as="span" size="xsmall" weight="bold" className="errorMsg" textAlign="left">
            {errors?.name?.message || ''}
          </CustomText>
          <label htmlFor="school">Escuela</label>
          <Controller
            control={methods.control}
            name="school"
            rules={{ required: 'Campo obligatorio' }}
            render={({ field: { onChange, value } }) => (
              <Select
                options={schoolOptions}
                className="formInput"
                instanceId="schoolId"
                isMulti={false}
                closeMenuOnSelect
                placeholder="Escuela"
                value={
                  value
                    ? schoolOptions.find((school) => school.value === value)
                    : { label: '', value: '' }
                }
                onChange={(e) => onChange(e?.value)}
              />
            )}
          />
          <CustomText as="span" size="xsmall" weight="bold" className="errorMsg" textAlign="left">
            {errors?.school?.message || ''}
          </CustomText>
          <label htmlFor="category">Categoría</label>
          <Controller
            control={methods.control}
            name="category"
            rules={{ required: 'Campo obligatorio' }}
            render={({ field: { onChange, value } }) => (
              <Select
                options={categoryOptions}
                className="formInput"
                instanceId="categoryId"
                isMulti={false}
                closeMenuOnSelect
                placeholder="Categoría"
                value={
                  value
                    ? categoryOptions.find((category) => category.value === value)
                    : { label: '', value: '' }
                }
                onChange={(e) => onChange(e?.value)}
              />
            )}
          />
          <CustomText as="span" size="xsmall" weight="bold" className="errorMsg" textAlign="left">
            {errors?.category?.message || ''}
          </CustomText>
          <label htmlFor="available-sizes">Talles en los que viene el producto</label>
          <Controller
            control={methods.control}
            name="availableSizes"
            rules={{ required: 'Campo obligatorio' }}
            render={({ field: { onChange, value } }) => (
              <Select
                options={sizesOptions}
                instanceId="sizeId"
                name="available-sizes"
                isMulti
                closeMenuOnSelect={false}
                className="formInput"
                placeholder="Talles"
                noOptionsMessage={() => 'No hay más opciones'}
                value={value || getValues('availableSizes')}
                onChange={(e) => {
                  onChange(e);
                  setAvailableSizes(e);
                }}
              />
            )}
          />
          <CustomText as="span" size="xsmall" weight="bold" className="errorMsg" textAlign="left">
            {(errors?.availableSizes as unknown as FieldError)?.message || ''}
          </CustomText>
          {Boolean(availableSizes?.length) && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {availableSizes?.map((size, i) => (
                <div key={`${size.label}-i`} className="sizeContainer">
                  <input
                    type="text"
                    className="sizeName"
                    value={size.value}
                    {...register(`sizes.${i}.name` as const)}
                  />
                  <div>
                    <input
                      type="text"
                      className="textInput sizePrice"
                      placeholder="Precio"
                      {...register(`sizes.${i}.price` as const, {
                        required: 'Campo obligatorio',
                        pattern: { value: /^-?[0-9]\d*\.?\d*$/, message: 'Solo se aceptan numeros' }
                      })}
                    />
                    <CustomText
                      as="span"
                      size="xsmall"
                      weight="bold"
                      className="errorMsg"
                      textAlign="left"
                    >
                      {errors?.sizes?.[i]?.price?.message || ''}
                    </CustomText>
                  </div>
                  <CustomText as="label" size="xsmall" weight="bold" textAlign="left">
                    Stock
                  </CustomText>
                  <input
                    type="checkbox"
                    className="sizeStock"
                    title="Stock"
                    {...register(`sizes.${i}.stock` as const)}
                  />
                </div>
              ))}
            </div>
          )}
          <CustomButton type="submit" size="small" weight="regular">
            {productId ? 'Editar' : 'Añadir'}
          </CustomButton>
        </div>
        {!productId && (
          <div className="rightContainer">
            <CustomText
              as="label"
              htmlFor="img"
              className="fileInput"
              size="small"
              weight="regular"
              textAlign="left"
            >
              <img src={image || '/assets/placeholder_shirt.png'} alt="placeholder shirt" />
              <input
                id="img"
                type="file"
                {...register('img', { required: 'Campo obligatorio' })}
                accept="image/png"
                style={{ display: 'none' }}
                onChange={onImageChange}
              />
            </CustomText>
            <CustomText as="span" size="xsmall" weight="bold" className="errorMsg">
              {errors?.img?.message || ''}
            </CustomText>
          </div>
        )}
      </form>

      <Modal onClose={() => setShowModal(false)} showModal={showModal} closeOnClickOutside={false}>
        <ModalBody
          textHeading={productId ? 'Producto editado! 📝' : 'Producto añadido! ✅'}
          textBody={!productId ? 'Deseas añadir un nuevo producto?' : undefined}
          linkCta={{ href: PATHS.ADMIN_PRODUCTS, text: 'Volver a la tabla de productos' }}
          buttonCta={
            !productId
              ? {
                  handler: () => {
                    setShowModal(false);
                    router.reload();
                  },
                  text: 'Crear nuevo producto'
                }
              : undefined
          }
        />
      </Modal>
    </Styled.ProductFormContainer>
  );
}

export default ProductForm;
