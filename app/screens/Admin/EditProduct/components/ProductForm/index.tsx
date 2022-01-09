import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm, Controller, FieldError } from 'react-hook-form';
import Select, { MultiValue } from 'react-select';
import CustomButton from '~components/CustomButton';
import CustomText from '~components/CustomText';
import Modal from '~components/Modal';
import useDbCrud from '~hooks/useDbCrud';
import { EDbCollections } from '~types/db';
import { CProductSizes, TProduct } from '~types/product';
import { CSchools, TSchoolIds } from '~types/schools';
import * as Styled from './styles';

type TMultiOptions = MultiValue<{ value: string; label: string }>;

type TFormData = {
  img: FileList;
  name: string;
  price: string;
  school: TSchoolIds;
  availableSizes: TMultiOptions;
  stockBySize: TMultiOptions;
};

function ProductForm() {
  const router = useRouter();
  const { id: productId } = router.query;
  const [docData, setDocData] = useState<TProduct | undefined>(undefined);

  const { addStorageFile, getDbDocument, storageUploadState } = useDbCrud(EDbCollections.products);
  const schoolOptions = Object.entries(CSchools).map((school) => {
    const [id, name] = school;
    return { value: id as TSchoolIds, label: name };
  });
  const sizesOptions = Object.values(CProductSizes).map((size) => ({ value: size, label: size }));

  useEffect(() => {
    if (productId && !docData) {
      setDocData(getDbDocument<TProduct>(productId as string));
    }
  }, [docData, getDbDocument, productId]);

  const methods = useForm<TFormData>();
  const {
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
    register
  } = methods;

  useEffect(() => {
    if (docData) {
      setValue('name', docData?.name);
      setValue('price', String(docData?.price));
      setValue('school', docData?.school);
      setValue(
        'availableSizes',
        Object.keys(docData?.stockBySize).map((size) => ({ label: size, value: size }))
      );
      setAvailableSizes(
        Object.keys(docData?.stockBySize).map((size) => ({ label: size, value: size }))
      );
      setValue(
        'stockBySize',
        Object.entries(docData?.stockBySize)
          .filter(([_, hasStock]) => hasStock)
          .map(([size]) => ({ value: size, label: size }))
      );
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

  const onSubmit = ({ availableSizes, img, name, price, school, stockBySize }: TFormData) => {
    const image = img[0];
    const parsedPrice = parseInt(price, 10);
    const stockBySizeValues = stockBySize?.map((size) => size.value);
    const reducedStockBySize: TProduct['stockBySize'] = availableSizes.reduce(
      (acc, size) => ({
        ...acc,
        [size.value]: stockBySizeValues?.includes(size.value)
      }),
      {}
    );

    addStorageFile(image, 'products', {
      name,
      school,
      price: parsedPrice,
      stockBySize: reducedStockBySize
    });
  };

  // const onEdit = ({ availableSizes, img, name, price, school, stockBySize }: TFormData) => {
  const onEdit = () => {
    return null;
  };

  useEffect(() => {
    if (storageUploadState === 'success') setShowModal(true);
  }, [storageUploadState]);

  return (
    <Styled.ProductFormContainer>
      <form className="form" onSubmit={handleSubmit(productId ? onEdit : onSubmit)}>
        <div className="leftContainer">
          <CustomText as="label" htmlFor="name" size="small" weight="regular" textAlign="left">
            Nombre
          </CustomText>
          <input
            type="text"
            {...register('name', {
              required: 'Campo obligatorio',
              minLength: { value: 8, message: 'El valor debe ser mas largo' }
            })}
          />
          <CustomText as="span" size="xsmall" weight="bold" className="errorMsg" textAlign="left">
            {errors?.name?.message || ''}
          </CustomText>
          <label htmlFor="price">Precio</label>
          <input
            type="text"
            {...register('price', {
              required: 'Campo obligatorio',
              pattern: { value: /^-?[0-9]\d*\.?\d*$/, message: 'Solo se aceptan numeros' }
            })}
          />
          <CustomText as="span" size="xsmall" weight="bold" className="errorMsg" textAlign="left">
            {errors?.price?.message || ''}
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
                value={schoolOptions.find((school) => school.value === value)}
                onChange={(e) => onChange(e?.value)}
              />
            )}
          />
          <CustomText as="span" size="xsmall" weight="bold" className="errorMsg" textAlign="left">
            {errors?.school?.message || ''}
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
            <>
              <label htmlFor="stockBySize">Talles con stock</label>
              <Controller
                control={methods.control}
                name="stockBySize"
                rules={{ required: 'Campo obligatorio' }}
                render={({ field: { onChange, value } }) => (
                  <Select
                    options={availableSizes}
                    instanceId="stockBySizeId"
                    isMulti
                    closeMenuOnSelect={false}
                    className="formInput"
                    placeholder="Stock"
                    noOptionsMessage={() => 'No hay más opciones'}
                    value={value || getValues('stockBySize')}
                    onChange={(e) => onChange(e)}
                  />
                )}
              />
              <CustomText
                as="span"
                size="xsmall"
                weight="bold"
                className="errorMsg"
                textAlign="left"
              >
                {(errors?.stockBySize as unknown as FieldError)?.message || ''}
              </CustomText>
            </>
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
        <Styled.ModalBodyContainer>
          <CustomText as="span" size="big" weight="bold" className="modalHeading">
            Producto añadido! ✔︎
          </CustomText>
          <CustomText as="span" size="regular" weight="bold" className="modalSubheading">
            Deseas añadir un nuevo producto?
          </CustomText>
          <div className="ctaContainer">
            <CustomButton size="small" weight="regular">
              Volver a la tabla de productos
            </CustomButton>
            <CustomButton size="small" weight="regular">
              Crear nuevo producto
            </CustomButton>
          </div>
        </Styled.ModalBodyContainer>
      </Modal>
    </Styled.ProductFormContainer>
  );
}

export default ProductForm;
