// FavoriteIcn.jsx
import { FavoriteBorder, Favorite } from '@mui/icons-material';

export const FavoriteIcon = ({ onClick, favorited }) => {
  return (
    <div>
      {favorited ? (
        <Favorite
          aria-label="Remove from favorites"
          sx={{
            color: 'red',
            cursor: 'pointer',
          }}
          onClick={onClick}
        />
      ) : (
        <FavoriteBorder
          aria-label="Add to favorites"
          sx={{
            borderColor: 'red',
            cursor: 'pointer',
            '&:hover': {
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.1)'
            }
          }}
          onClick={onClick}
        />
      )}
    </div>
  );
};
