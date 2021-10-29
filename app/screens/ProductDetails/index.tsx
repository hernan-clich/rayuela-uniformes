import { useRouter } from 'next/router';
import PublicLayout from '~components/PublicLayout';

function ProductDetails() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <PublicLayout>
      <p>{slug}</p>
    </PublicLayout>
  );
}

export default ProductDetails;
